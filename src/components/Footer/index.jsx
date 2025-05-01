import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  padding: 16px;
  margin-top: 64px;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      &copy; {new Date().getFullYear()} Ragnarok Wiki. Criado por você. Não oficial.
    </Wrapper>
  );
};

export default Footer;
