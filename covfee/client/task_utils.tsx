import CovfeeTasks from "./tasks"
import CovfeePlayers from "./players"

export const getTask = (type: string) => {
  if (type in CovfeeTasks) {
    const taskImport = CovfeeTasks[type]
    if (
      typeof taskImport === "object" &&
      "taskComponent" in taskImport &&
      "taskSlice" in taskImport
    ) {
      return taskImport
    } else {
      return { taskComponent: taskImport, taskSlice: null }
    }
  } else {
    return null
  }
}

export const getPlayerClass = (type: string) => {
  if (type in CovfeePlayers) {
    const taskClass = CovfeePlayers[type]
    return taskClass
  } else {
    return null
  }
}
