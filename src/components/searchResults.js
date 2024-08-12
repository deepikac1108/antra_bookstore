// src/components/SearchResults.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../redux/bookSlice';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book.id} onClick={() => dispatch(addToWishlist(book))}>
          <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
          <h3>{book.volumeInfo.title}</h3>
          <p>Author: {book.volumeInfo.authors?.join(', ')}</p>
          <p>Publisher: {book.volumeInfo.publisher}</p>
          <p>Published Date: {book.volumeInfo.publishedDate}</p>
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;