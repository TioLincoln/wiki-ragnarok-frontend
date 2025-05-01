import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th, td {
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 8px;
    text-align: left;
    color: ${({ theme }) => theme.colors.text};
  }

  th {
    background: ${({ theme }) => theme.colors.surface};
  }
`;

const DropTable = ({ drops }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Chance (%)</th>
        </tr>
      </thead>
      <tbody>
        {drops.map((drop, index) => (
          <tr key={index}>
            <td>{drop.item}</td>
            <td>{drop.chance}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DropTable;
