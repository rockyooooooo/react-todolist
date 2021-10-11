import { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'

const NewTodoFormItem = styled.form`
  width: 100%;
  display: flex;
`

const NewTodoInput = styled.input`
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  color: var(--gray-dark);
  padding: 0.25rem 0.5rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 0px;
  transition: border var(--transition-duration) ease;

  &::placeholder {
    transition: color var(--transition-duration) ease;
    user-select: none;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--gray-main);
    color: var(--gray-main);

    &::placeholder {
      color: transparent;
    }
  }
`

export default function NewTodoForm() {
  const [newTodoContent, setNewTodoContent] = useState('')
  const dispatch = useDispatch()

  const handleNewTodoFormSubmit = (e) => {
    e.preventDefault()
    if (!newTodoContent) return
    dispatch(addTodo(newTodoContent))
    setNewTodoContent('')
  }

  return (
    <NewTodoFormItem onSubmit={handleNewTodoFormSubmit}>
      <NewTodoInput
        type="text"
        value={newTodoContent}
        onChange={(e) => setNewTodoContent(e.target.value)}
        placeholder="new todo"
      />
    </NewTodoFormItem>
  )
}
