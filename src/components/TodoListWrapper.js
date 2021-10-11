import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { TodoItem, Button, TodosFilter } from './'
import { deleteAllTodos } from '../redux/actions'
import { selectFilter, selectTodos } from '../redux/selectors'

const TodoListWrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const TodoList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const RemoveAllTodosButton = styled(Button)`
  margin: 0 auto;
`

export default function TodoListWrapper() {
  const todos = useSelector(selectTodos)
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <TodoListWrapperItem>
      <TodosFilter />
      <TodoList>
        {todos
          .filter((todo) => todo.isChecked !== filter)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </TodoList>
      <RemoveAllTodosButton onClick={() => dispatch(deleteAllTodos())}>
        刪除全部
      </RemoveAllTodosButton>
    </TodoListWrapperItem>
  )
}
