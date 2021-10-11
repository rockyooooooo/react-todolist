import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { NewTodoForm, TodoListWrapper } from './components'
import { selectTodos } from './redux/selectors'

const Container = styled.div`
  background: var(--bg-main);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`

const TodosContainer = styled.div`
  width: 50vw;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

function App() {
  const todos = useSelector(selectTodos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Container>
      <TodosContainer>
        <NewTodoForm />
        {!!todos.length && <TodoListWrapper />}
      </TodosContainer>
    </Container>
  )
}

export default App
