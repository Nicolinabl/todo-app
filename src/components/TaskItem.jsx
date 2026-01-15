import { useTodoStore } from '../stores/useTodoStore'
import { styled } from 'styled-components'

export const TaskItem = ({task}) => {
  const removeTask = useTodoStore(state => state.removeTask)
  const toggleIsCompleted = useTodoStore(state => state.toggleIsCompleted)
  
  return (
    <StyledDiv>
      <button onClick={() => toggleIsCompleted(task.id)}>{task.isCompleted ? 'Completed' : 'Not completed'}</button>
      <P>{task.newTask}</P>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  padding: 10px 5px;
  background: #FFFFFF;
  border-radius: 20px;
  margin-bottom: 10px;
  border: 1px solid #F3E8F4;

  &:hover {
  box-shadow: 0 4px 20px #F3E8F4;
  }
`

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 300;
`
