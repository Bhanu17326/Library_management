import React from 'react';

function BooksList({books}){
    return(
        <div>
            {books.map((book)=> (
                <div key = "{book.id}">
                    <h2>{book.volumeInfo.title}</h2>
                    <p>{book.volumeInfo.authors && book.volumeInfo.authors[0]}</p>
                    <img src = {book.volumeInfo.imageLinks && books.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
                </div>
            ))}
        </div>
    );
}

export default BooksList;