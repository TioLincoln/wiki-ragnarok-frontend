import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav`
  a {
    margin-left: 24px;
    color: ${({ theme }) => theme.colors.textMuted};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>Ragnarok Wiki</Logo>
      <Nav>
        <Link to="/">Início</Link>
        <Link to="/monstros">Monstros</Link>
        <Link to="/itens">Itens</Link>
        <Link to="/mapas">Mapas</Link>
      </Nav>
    </Wrapper>
  );
};

export default Header;
