import { useTodoStore } from '../stores/useTodoStore'

export const TaskItem = ({task}) => {
  const removeTask = useTodoStore(state => state.removeTask)
  const toggleIsCompleted = useTodoStore(state => state.toggleIsCompleted)
  
  return (
    <div>
      <p>{task.newTask}</p>

      <button onClick={() => toggleIsCompleted(task.id)}>{task.isCompleted ? 'Completed' : 'Not completed'}</button>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  )
}
