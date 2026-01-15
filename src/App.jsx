
import { Header } from "./components/Header"
import { AddTask } from "./components/AddTask"
import { TaskSection } from "./components/TaskSection"
import { GlobalStyle } from "./GlobalStyles"
import { PageWrapper } from "./PageWrapper"

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <AddTask />
        <TaskSection />
      </PageWrapper>
    </>
  )
}
