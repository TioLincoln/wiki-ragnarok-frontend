import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.aside`
  background: ${({ theme }) => theme.colors.surface};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 250px;
`;

const Sidebar = ({ children }) => {
  return (
    <Wrapper>
      <h3>Filtros</h3>
      {children}
    </Wrapper>
  );
};

export default Sidebar;
