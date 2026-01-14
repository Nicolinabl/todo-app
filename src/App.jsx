
import { TaskSection } from "./components/TaskSection"
import { HeaderSection
 } from "./components/HeaderSection"
import { AddTaskSection } from "./components/AddTaskSection"

export const App = () => {
  return (
    <>
      <HeaderSection />
      {/* <AddTaskSection /> */}
      <TaskSection />
    </>
  )
}
