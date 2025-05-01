import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  color: ${({ theme }) => theme.colors.text};
  margin: 16px 0;
`;

export default Card;
