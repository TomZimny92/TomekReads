import type { BookType } from "../types/BookType";
//import { useState } from "react";

//const [bookData, getBookData] = useState<BookType>(() => GenerateTestData());
const bookData: BookType = GenerateTestData();

type BookData = {
    data?: BookType
    onClose?: () => void
}


function AddBookModal({ onClose }: BookData) {
    return (
        <>
            <div>
                <SearchBar />            
            </div>
            <div>
                <BookModalBody data={bookData} />
            </div>
            <div>
                <BookModalButtons onClose={onClose} />
                // have an emit inside the close button that 
                // kicks up a trigger to the dialog close
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

function BookModalButtons({ onClose }: BookData) {
    return (
        <>
            <div>
                <button type="button" onClick={() => onClose}>Cancel</button>
            </div>
            <div>
                <button type="submit">Add Book</button>
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

export default AddBookModal;