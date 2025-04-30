import styled from 'styled-components';

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing(1)};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`;

export default Input;
