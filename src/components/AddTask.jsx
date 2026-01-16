import { useTodoStore } from '../stores/useTodoStore'
import { styled } from 'styled-components'

export const AddTask = () => {
  const addTask = useTodoStore(state => state.addTask)

  const handleAddTask = (e) => {
    e.preventDefault()
    const newTask = e.target.taskInfo.value
    addTask(newTask)
    e.target.taskInfo.value = ''
  }

  return (
    <StyledForm onSubmit={handleAddTask}>
      <StyledDiv>
      <StyledInput type="text" name="taskInfo" placeholder="I need to..."/>
      <StyledButton type="submit"><P>+</P></StyledButton>
      </StyledDiv>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  padding: 10px 5px;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  flex: 1;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  border-radius: 12px;
  border: 1px solid #F3E8F4;
  padding: 8px 12px;
  
  &:hover {
    box-shadow: 0 4px 20px #F3E8F4;
  }
`

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledButton = styled.button`
  height: 40px;
  width: 40px;
  background: #E1CBED;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

const P = styled.p`
  font-size: 20px;
  margin: 0;
`