// Node.js require:
import { configureStore, Store } from '@reduxjs/toolkit'
import winston from 'winston'
const zmq = require("zeromq")
import slices from '../../client/tasks/slices'
import type {Request, JoinResponse, LeaveResponse, 
    Action, ActionResponse, StateResponse} from './types'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console()
    ]
  })



class StoreService {
    rooms: {[key: string] : {
        store: Store,
        actionIndex: number
        numConnections: number
    }} = {}

    constructor() {

    }

    /**
     * Returns the redux slice for a task
     * @param responseId 
     */
    _getSlice(taskName: string) {        
        if(!(taskName in slices)) {
            logger.info(`Could not find slice for task name ${taskName}`)
            return undefined
        }
                
        return slices[taskName]
    }


    /**
     * Internal method loads the current state from the DB and into the redux store
     * @returns true if the state was loaded from the database, false otherwise
     */
    _load(taskName: string, responseId: string, dbState: null | object): boolean {
        const slice = this._getSlice(taskName)
        if(!slice) {
            logger.warn(`Could not find slice but found DB state for responseId ${responseId}`)
            return false
        }

        this.rooms[responseId] = {
            store: configureStore({
                reducer: slice,
                preloadedState: dbState !== null ? dbState : undefined
            }),
            actionIndex: 0,
            numConnections: 0
        }
        return true
    }



    async join(taskName: string, responseId: string, dbState: null | object): Promise<JoinResponse> {
        logger.info('join')
        if(!(responseId in this.rooms)) {
            if(!(this._load(taskName, responseId, dbState))) {
                return {err: `Could not load state responseId ${responseId}`}
            } 
        } 
        
        this.rooms[responseId].numConnections += 1
        
        return this.state(responseId)
    }

    async leave(responseId: string): Promise<LeaveResponse> {
        if(!(responseId in this.rooms)) {
            return {err: `Could not find responseId ${responseId}`}
        }

        this.rooms[responseId].numConnections -= 1
        const state = await this.state(responseId)
        if(this.rooms[responseId].numConnections <= 0) {
            delete this.rooms[responseId]
        } 
        return {
            ...state
        }
    }

    async action(responseId: string, action: Action): Promise<ActionResponse> {
        if(!(responseId in this.rooms)) return {err: 'Task store not found.'}

        const dispatchedAction = this.rooms[responseId].store.dispatch(action)
        return {
            actionIndex: this.rooms[responseId].actionIndex++
        }
    }

    state(responseId: string): StateResponse {
        if(!(responseId in this.rooms)) return {err: 'Task store not found.'}

        return {
            numConnections: this.rooms[responseId].numConnections,
            actionIndex: this.rooms[responseId].actionIndex,
            state: this.rooms[responseId].store.getState()
        }
    }

    async run(port) {
        const sock = new zmq.Reply
        await sock.bind(`tcp://*:${port}`)
        logger.info(`Running at tcp://localhost:${port}`)
        for await (const [buffer] of sock) {
          const req = JSON.parse(buffer.toString('utf-8')) as Request
          let res

          switch(req['command']) {
            case 'join':
                const {responseId, taskName, currState} = req
                res = await this.join(taskName, responseId, currState)
                break
            case 'leave':
                res = await this.leave(req['responseId'])
                break
            case 'action':
                res = await this.action(req['responseId'], req['action'])
                break
            case 'state':
                res = await this.state(req['responseId'])
                break
            default:
                res = {err: 'Unrecognized command.'}
          }

          res['success'] = !('err' in res)
          await sock.send(JSON.stringify(res))
        }
    }
}

const args = process.argv.slice(2);
const port = parseInt(args[0])

const store = new StoreService()
store.run(port)

