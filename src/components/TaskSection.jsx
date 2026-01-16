import { useTodoStore } from "../stores/useTodoStore"
import { TaskItem } from "./TaskItem"
import { RelaxIcon } from './Icons'
import { styled } from 'styled-components'

export const TaskSection = () => {
  const task = useTodoStore(state => state.task)

  if (task.length === 0) {
    return (
      <>
        <P>Relax, there is nothing on your list</P>
        <RelaxIcon />
      </>
    )
  }

  return (
    <>
      {task.map(task => (
        <TaskItem key={task.id} task={task} />
        ))} 
    </>  
  )
}

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #756F8B;
`
