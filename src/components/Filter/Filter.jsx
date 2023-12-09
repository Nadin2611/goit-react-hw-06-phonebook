import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterHandleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Find contact by name
        <FilterInput
          type="text"
          value={filter}
          onChange={filterHandleChange}
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
