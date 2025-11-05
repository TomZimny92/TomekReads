// import stuff
//
//
//


export default function BookView({ book }: BookType) {
	return (
	<>
			<p>{book.name}</p>
			<p>{book.author}</p>
			<p>{book.rating}</p>
			<p>{book.review}</p>
	</>
	)
}

type BookType = {
	id: string,
	name: string,
	author?: string,
	rating?: number,
	review?: string,
}
