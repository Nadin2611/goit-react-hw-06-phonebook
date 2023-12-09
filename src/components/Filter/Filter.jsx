import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <FilterContainer>
      <FilterLabel>
        Find contact by name
        <FilterInput
          type="text"
          value={filter}
          onChange={onChange}
        ></FilterInput>
      </FilterLabel>
    </FilterContainer>
  );
};
