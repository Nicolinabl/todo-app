import { useTodoStore } from "../stores/useTodoStore"

export const TaskSection = () => {
  const { task, isCompleted, removeTask, toggleIsCompleted } = useTodoStore()

  return (
    <section>
      {task.map(task => (
        <div>
          <p key={task.id}>{task}</p>
          <p>Completed: {isCompleted ? 'yes' : 'No'}</p>
        </div>
      ))}
    </section>    
  )
}

// Next steps:
// * Add button in task
// * button onClick: call toggleIsCompleted
// * Update task array? Array of objects containing task, status, remove, id?