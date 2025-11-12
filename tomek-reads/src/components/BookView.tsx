import type { BookType } from "../types/BookType"

interface BookViewProps {
  book: BookType
}

const BookView: React.FC<BookViewProps> = ({book}) => {
  return (
    <>
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.rating}</div>
      <div>{book.review}</div>
    </>
  )
}

export default BookView