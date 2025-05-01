import React from 'react';
import styled from 'styled-components';

const Stat = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
`;

const StatDisplay = ({ label, value }) => {
  return (
    <Stat>
      <strong>{label}</strong>
      <span>{value}</span>
    </Stat>
  );
};

export default StatDisplay;
