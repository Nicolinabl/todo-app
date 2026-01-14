import { useTodoStore } from "../stores/useTodoStore"

export const HeaderSection = () => {
  const { task } = useTodoStore()

  return (
    <header>
      <h1>Todo app</h1>
      <h2>Stay organized, stay productive</h2>
      <p>On my todo list: {task.length} </p>
    </header>
  )
}