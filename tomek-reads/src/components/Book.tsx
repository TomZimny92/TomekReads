import { Book } from '../types/index.ts'

export function Book({book: Book}) {
	

	return (
		<>
			<div className="book-title">{book.name}</div>
			<div className="author-name">{book.author}</div>
			<div className="book-rating">{book.rating}</div>
			<div className="book-review">{book.review}</div>
		</>
			
	)
}

