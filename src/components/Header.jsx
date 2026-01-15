import { useTodoStore } from "../stores/useTodoStore"
import { styled } from 'styled-components'

export const Header = () => {
  const { task } = useTodoStore()

  return (
    <StyledHeader>
      <H1>Get on it</H1>
      <H2>Stay organized, stay productive</H2>
      <P>Todos: {task.length} </P>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
`

const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: #79738E;
`

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 300;
`