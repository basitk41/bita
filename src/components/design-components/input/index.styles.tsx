import styled from "styled-components";

export const Input = styled.input`
  padding: 0.8rem;
  margin: 0.8rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: #5c6bc0;
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
