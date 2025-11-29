//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import type { BookType } from "./types/BookType"
import BookView from './components/BookView'
import AddBookModal from './components/AddBookModal'


function App() {
const dialogRef = useRef<HTMLDialogElement | null>(null)
  //const [count, setCount] = useState(0)
  return (
    <>
      <h3>Books!</h3>
      <button className='text-lg bg-green-500' onClick={() => dialogRef.current?.showModal()}>Add Book</button>
      {books.map((book) => {
        return <BookView key={book.id} book={book} />
      })}
      <dialog ref={dialogRef}>
        <AddBookModal onClose={dialogRef.current?.close}/>
      </dialog>
    </>
  )
}

const books: BookType[] = [
  { id: "1", title: "test", author: "test", rating: 3, review: "good", publicationDate: "yesterday", pageCount: 60},
  { id: "2", title: "rest", author: "rest", rating: 3, review: "rood", publicationDate: "today", pageCount: 50}
]


export default App
