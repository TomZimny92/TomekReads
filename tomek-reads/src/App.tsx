//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import type { BookType } from "./types/BookType"
import BookView from './components/BookView'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <h3>Books!</h3>
    <button className='text-lg bg-green-500' onClick={openAddModal}>Add Book</button>
      {books.map((book) => {
        return <BookView book={book} />
      })}
    </>
  )
}


const books: BookType[] = [
  { id: "1", title: "test", author: "test", rating: 3, review: "good"},
  { id: "2", title: "rest", author: "rest", rating: 3, review: "rood"}
]

function openAddModal(): void {
  // open modal
}

export default App
