import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 24px 0;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Wrapper>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Anterior
      </Button>
      <span style={{ color: '#ccc', alignSelf: 'center' }}>
        Página {currentPage} de {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Próxima
      </Button>
    </Wrapper>
  );
};

export default Pagination;
