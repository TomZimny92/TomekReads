import { useEffect, useState } from "react";
import type { BookType } from "../types/BookType";

const bookData: BookType = GenerateTestData();

type BookData = {
    data?: BookType
    dialogRef?: React.RefObject<HTMLDialogElement | null>
    onClose?: () => void
}


function AddBookModal({ dialogRef, onClose }: BookData) {
    return (
        <dialog ref={dialogRef}>
            <div>
                <SearchBar />            
            </div>
            <div>
                <BookModalBody data={bookData} />
            </div>
            <div>
                <div>
                    <button type="button" onClick={onClose}>Cancel</button>
                </div>
                <div>
                    <button type="submit">Add Book</button>
                </div>
            </div>
        </dialog>
    )
}

function SearchBar() {

    //const [bookInput, setBookInput] = useState<BookType>();
    

    function handleBookInputChange() {
        console.log(bookInput?.nodeValue);
    }
    return (
        <input
            type="text" 
            placeholder="Enter a book title..."
            id="bookInput"
            onInput={handleBookInputChange} />
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
                    <input type="date" />
                </div>
                <div>
                    <label>Book Finish Date:</label>
                    <input type="date" />
                </div>
            </div>
        </>
    )
}

function GenerateTestData(): BookType {
    return {
        id: "1",
        title: "test title",
        author: "test author",
        publicationDate: "2025",
        pageCount: 32,
        bookStartDate: "yesterday",
        bookFinishDate: "today",
        rating: 4,
        review: "a good read",
    } as BookType
}

let bookInput: HTMLElement | null = document.getElementById("bookInput");

export default AddBookModal;