import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from './Button'
import ContentEditable from './contentEditable/contentEditable'
import './contentEditable/contentEditable.css'
import { deleteTodo, editTodo, toggleTodo } from '../redux/actions'

const TodoItemWrapper = styled.li`
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background var(--transition-duration) ease;

  &:hover button {
    opacity: 1;
  }

  ${(props) =>
    !props.$isChecked &&
    `
    &:hover {
      background: var(--bg-hover);
    }
  `}
`

const TodoCheckBox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

const DeleteTodoButton = styled(Button)`
  opacity: 0;
  flex-shrink: 0;
  transition: color var(--transition-duration) ease,
    opacity var(--transition-duration) ease;
`

export default function TodoItem({ todo }) {
  const dispatch = useDispatch()
  const { id, content, isChecked } = todo
  const contentEditableClassName = `editableContent ${
    isChecked ? 'isDone' : ''
  }`

  return (
    <TodoItemWrapper $isChecked={isChecked}>
      <TodoCheckBox
        type="checkbox"
        checked={isChecked}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <ContentEditable
        tagName="pre"
        className={contentEditableClassName}
        html={content}
        onChange={(e) => dispatch(editTodo(id, e.target.value))}
      />
      <DeleteTodoButton onClick={() => dispatch(deleteTodo(id))}>
        刪除
      </DeleteTodoButton>
    </TodoItemWrapper>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired
  }).isRequired
}
