function insertBook(book) {
    const bookHtml = `
        <span class="title">${book.title}</span>
        <span class="authors">${(book.authors || []).join(', ')}</span>
        <span class="description" title="${book.description}"><i class="fas fa-info-circle"></i></span>
    `;
    document.getElementById('book-description').innerHTML = bookHtml;
}

function readBook(isbn) {
    console.log(isbn);
    if (isbn) {
        fetch(`/isbn/${isbn}`)
            .then((res) => res.json())
            .then((book) => {
                console.log(book);
                if (book) {
                    insertBook(book)
                } else {
                    fetch(`/books/isbn/${isbn}`)
                        .then((res) => res.json())
                        .then((book) => {
                            if (book) {
                                insertBook(book)
                            }
                        });
                }
            });
    }
}

readBook(new URLSearchParams(window.location.search).get('rechercheISBN'));
