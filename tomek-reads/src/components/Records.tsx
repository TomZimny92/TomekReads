

import { books } from '../data/books.json'
import { Book } from './Book.tsx'

export function Records() {

	//const records = books.map(book => <li><Book book=book /></li>)
	return (
		<>
			{books.map((book) => {
				<Book book={book} />
			})}
			
		</>
	)
}
