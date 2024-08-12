// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import SearchBar from './components/searchBar';
import SearchResults from './components/searchResults';
import Wishlist from './components/wishlist';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
        <SearchResults />
        <Wishlist />
      </div>
    </Provider>
  );
}

export default App;
