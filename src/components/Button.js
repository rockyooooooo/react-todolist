import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  font-size: 1rem;
  color: var(--gray-dark);
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  transition: color var(--transition-duration) ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: var(--gray-main);
  }
`

export default Button
