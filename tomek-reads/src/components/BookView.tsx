// src/components/BookView.tsx

import React from 'react';
import { BookType } from '../types/BookType'; // Adjust path if needed

// Define the props for BookView
interface BookViewProps {
  book: BookType;
}

const BookView: React.FC<BookViewProps> = ({ book }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>**{book.title}**</h3>
      <p>
        **Author:** {book.author}
      </p>
      <p>
        **Published Year:** {book.year}
      </p>
      <p>
        **ID:** {book.id}
      </p>
    </div>
  );
};

export default BookView;
