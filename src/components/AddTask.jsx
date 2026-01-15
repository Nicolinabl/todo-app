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
      <StyledInput type="text" name="taskInfo" placeholder="Add a task..."/>
      <button type="submit">Add task</button>
      </StyledDiv>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  padding: 10px 30px;
  margin-bottom: 15px;
`

const StyledInput = styled.input`
  flex: 1;
  font-family: 'Montserrat', sans-serif;
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