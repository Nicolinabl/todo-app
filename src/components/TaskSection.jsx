import { useTodoStore } from "../stores/useTodoStore"
import { TaskItem } from "./TaskItem"

export const TaskSection = () => {
  const task = useTodoStore(state => state.task)

  return (
    <section>
      <ul>
        {task.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </section>    
  )
}
