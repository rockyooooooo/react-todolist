import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { toggleFilter } from '../redux/actions'
import Button from './Button'

const TodosFilterItem = styled.div`
  display: flex;
  justify-content: space-between;
`
const FilterButton = styled(Button)`
  flex: 1;
`

export default function TodosFilter() {
  const dispatch = useDispatch()

  return (
    <TodosFilterItem>
      <FilterButton onClick={() => dispatch(toggleFilter(null))}>
        全部
      </FilterButton>
      <FilterButton onClick={() => dispatch(toggleFilter(true))}>
        未完成
      </FilterButton>
      <FilterButton onClick={() => dispatch(toggleFilter(false))}>
        已完成
      </FilterButton>
    </TodosFilterItem>
  )
}
