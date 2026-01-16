import { useTodoStore } from "../stores/useTodoStore"
import { styled } from 'styled-components'

export const Header = () => {
  const { task } = useTodoStore()

  return (
    <StyledHeader>
      <H1>Get it done</H1>
      <H2>Stay organized, stay productive</H2>
      <P>Todos: {task.length} </P>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 2px solid #F3E8F4;
  margin-bottom: 30px;
`

const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
`

const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #756F8B;
`

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 300;
`