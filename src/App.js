import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BooksList from './components/BooksList';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  }, [keyword]);

  return (
    <div className='App'>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <BooksList books={books} />
    </div>
  );
}

export default App;