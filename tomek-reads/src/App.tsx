import './App.css'
import { useCallback, useRef } from 'react'
import type { BookType } from "./types/BookType"
import BookView from './components/BookView'
import AddBookModal from './components/AddBookModal'


function App() {
  const dialogRef = useRef<HTMLDialogElement | null>(null)
  const handleCloseAddModal = useCallback(() => {
    dialogRef.current?.close();
  }, [])

  const handleOpenAddModal = () => {
    dialogRef.current?.showModal();
  }

  return (
    <>
      <h3>Books!</h3>
      <button className='text-lg bg-green-500' onClick={handleOpenAddModal}>Add Book</button>
      {books.map((book) => {
        return <BookView key={book.id} book={book} />
      })}
      <AddBookModal onClose={handleCloseAddModal} dialogRef={dialogRef}/>
    </>
  )
}

const books: BookType[] = [
  { id: "1", title: "test", author: "test", rating: 3, review: "good", publicationDate: "yesterday", pageCount: 60},
  { id: "2", title: "rest", author: "rest", rating: 3, review: "rood", publicationDate: "today", pageCount: 50}
]


export default App
