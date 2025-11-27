import type { BookType } from "../types/BookType";
import { useState } from "react";

const [bookData, getBookData] = useState<BookType>();

type BookData = {
    data?: BookType
}

function AddBookModal() {       
    return (
        <>
            <div>
                <SearchBar />            
            </div>
            <div>
                <BookModalBody data={bookData} />
            </div>
            <div>
                <BookModalButtons />
            </div>
        </>
    )
}

function SearchBar() {
    return (
        <input type="text" placeholder="Enter a book title..." />
    );
}

function BookModalBody({ data }: BookData) {
    return (
        <>
            <div>
                <div>
                    <label>Title:</label>
                    <p>{data?.title}</p>
                </div>
                <div>
                    <label>Author:</label>
                    <p>{data?.author}</p>
                </div>
                <div>
                    <label>Publication Date:</label> 
                    <p>{data?.publicationDate}</p>
                </div>
                <div>
                    <label>Page Count:</label>
                    <p>{data?.pageCount}</p>
                </div>
                <div>
                    <label>Rating:</label>
                    <p>{data?.rating}</p>
                </div>
                <div>
                    <label>Review:</label>
                    <p>{data?.review}</p>
                </div>
                <div>
                    <label>Book Start Date:</label>
                    <input type="date">Book Start Date</input>
                </div>
                <div>
                    <label>Book Finish Date:</label>
                    <input type="date">Book Finish Date</input>
                </div>
            </div>
        </>
    )
}

function BookModalButtons() {
    return (
        <>
            <div>
                <button type="button">Cancel</button>
            </div>
            <div>
                <button type="submit">Add Book</button>
            </div>
        </>
    )
}

export default AddBookModal;