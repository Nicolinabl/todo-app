
import { HeaderSection } from "./components/HeaderSection"
import { AddTaskForm } from "./components/AddTaskForm"
import { TaskSection } from "./components/TaskSection"

export const App = () => {
  return (
    <>
      <HeaderSection />
      <AddTaskForm />
      <TaskSection />
    </>
  )
}
