import React, { useState, useEffect } from 'react';
import Input from '../UI/Input';

const SearchBar = ({ onSearch, delay = 500 }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      onSearch(term);
    }, delay);

    return () => clearTimeout(handler);
  }, [term]);

  return (
    <Input
      placeholder="Buscar..."
      value={term}
      onChange={(e) => setTerm(e.target.value)}
    />
  );
};

export default SearchBar;
