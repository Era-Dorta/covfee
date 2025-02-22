import { createContext } from "react"
import { NodeType, TaskResponseType } from "../types/node"
import React from "react"
import { Action } from "@reduxjs/toolkit"

export type NodeContextType = {
  node: NodeType
  response?: TaskResponseType
  dispatch: (arg0: Action) => void
  useSharedState: boolean
}

export const nodeContext = createContext<NodeContextType>({
  node: null,
  response: null,
  dispatch: (_) => {},
  useSharedState: false,
})

export const usePlayer = () => {
  const player = React.useContext(nodeContext)

  return { ...player }
}
