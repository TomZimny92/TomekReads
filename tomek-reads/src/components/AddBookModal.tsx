

function AddBookModal() {       
    return (
        <>
        <div>
            <div>input field for book name. use external api to autofill books as you type</div>
            <div>once the book is selected from the field above, it autofills the following information:
                <p>Author</p>
                <p>Publication Date</p>
                <p>Page Count</p>
                <p>Book Start Date</p>
            </div>
            <div>Cancel Button</div>
            <div>Add Button</div>
        </div>
        </>
    )
}

export default AddBookModal;