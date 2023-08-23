import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;

export const StyledContact = styled.li`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: #4d5ae5;
`;

export const StyledBtnDelete = styled.button`
  font-family: inherit;
  font-weight: 400;
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  justify-content: center;
  color: #ffffff;
  background-color: #4d5ae5;
  margin: 4px 0 4px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #404bbf;
  }
`;
