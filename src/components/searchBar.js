// src/components/SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/bookSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchBooks(query));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for books..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;