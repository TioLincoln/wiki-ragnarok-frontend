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
  display: flex;
  align-items: center;
  gap: 16px;
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

const ThemeToggleWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.highlight};
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: ${({ darkMode }) => (darkMode ? '4px' : '24px')};
  left: 4px;
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  transition: top 0.3s ease-in-out;
`;

const Header = ({ toggleTheme, darkMode }) => {
  return (
    <Wrapper>
      <Logo>
        Ragnarok Wiki
        <ThemeToggleWrapper onClick={toggleTheme}>
          <ToggleCircle darkMode={darkMode} />
        </ThemeToggleWrapper>
      </Logo>
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
