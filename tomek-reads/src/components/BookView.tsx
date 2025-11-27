import type { BookType } from "../types/BookType"

interface bookProp {
    book: BookType
}

function BookView({book}: bookProp) {
    return (
      <>
        <div className='border border-solid border-red-600 rounded'>
          <div>{book.title}</div>
          <div>{book.author}</div>
          <div>{book.rating}</div>
          <div>{book.review}</div>
        </div>
      </>
    );
}

export default BookView