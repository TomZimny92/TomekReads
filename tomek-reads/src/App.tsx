// src/App.tsx

import React from 'react';
import BookView from './components/BookView';
import { BookType } from './types/BookType'; // Adjust path if needed

// 1. Define the static list of books using the BookType interface
const bookList: BookType[] = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>**My Book Collection**</h1>
      {/* 2. Use the map() function to iterate and render BookView for each book */}
      {bookList.map((book) => (
        <BookView 
          key={book.id} // **Crucial:** Always include a unique 'key' prop when mapping elements
          book={book} 
        />
      ))}
    </div>
  );
};

export default App;
