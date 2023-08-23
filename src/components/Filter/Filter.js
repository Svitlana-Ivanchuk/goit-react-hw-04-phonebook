import { StyledFilter, StyledInput, StyledTitle } from './Filter.styled';

export const FilterName = ({ searchName, onSearch }) => {
  return (
    <StyledFilter>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput
        type="text"
        value={searchName}
        onChange={evt => onSearch(evt.target.value)}
      />
    </StyledFilter>
  );
};
