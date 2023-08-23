import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  color: #4d5ae5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: inherit;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  height: 36px;
`;

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  min-width: 169px;
  justify-content: center;
  color: #ffffff;
  background-color: #4d5ae5;
  margin: 8px auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 8px 16px;
  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #404bbf;
  }
`;
