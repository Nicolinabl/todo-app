import { useTodoStore } from "../stores/useTodoStore"
import { TaskItem } from "./TaskItem"

export const TaskSection = () => {
  const task = useTodoStore(state => state.task)

  if (task.length === 0) {
    return <p>No tasks</p>
  }

  return (
    <>
      {task.map(task => (
        <TaskItem key={task.id} task={task} />
        ))} 
    </>  
  )
}
