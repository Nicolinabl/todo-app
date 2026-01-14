import { useTodoStore } from "../stores/useTodoStore"

export const TaskSection = () => {
  const task = useTodoStore(state => state.task)
  const isCompleted = useTodoStore(state => state.isCompleted)
  const removeTask = useTodoStore(state => state.removeTask)
  const addTask = useTodoStore(state => state.addTask)
  const toggleIsCompleted = useTodoStore(state => state.toggleIsCompleted)

  const handleAddTask = (e) => {
    e.preventDefault()
    const newTask = e.target.taskInfo.value
    addTask(newTask)
    e.target.taskInfo.value = ''

  }
  
  return (
    <section>
      <form onSubmit={handleAddTask}>
        <input type="text" name="taskInfo"/>
        <button type="submit">Add task</button>
      </form>

      {task.map((task, index) => (
        <div>
          <p key={index}>{task.newTask}</p>
          <button onClick={toggleIsCompleted}>{isCompleted ? 'Completed' : 'Not completed'}</button>
         
        </div>
      ))}
    </section>    
  )
}

// Next steps:
// * Add button in task
// * button onClick: call toggleIsCompleted
// * Update task array? Array of objects containing task, status, remove, id?