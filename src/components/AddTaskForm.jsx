import { useTodoStore } from '../stores/useTodoStore'

export const AddTaskForm = () => {
  const addTask = useTodoStore(state => state.addTask)

  const handleAddTask = (e) => {
    e.preventDefault()
    const newTask = e.target.taskInfo.value
    addTask(newTask)
    e.target.taskInfo.value = ''
  }

  return (
    <form onSubmit={handleAddTask}>
      <input type="text" name="taskInfo" placeholder="Add a task..."/>
      <button type="submit">Add task</button>
    </form>
  )
}