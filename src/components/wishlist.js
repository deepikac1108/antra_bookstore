// src/components/Wishlist.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist } from '../redux/bookSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.books.wishlist);

  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((book) => (
          <li key={book.id}>
            {book.volumeInfo.title}
            <button onClick={() => dispatch(removeFromWishlist(book.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;