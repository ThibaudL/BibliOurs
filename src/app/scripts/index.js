function bookToLine(book) {
    return `<li>
        <a class="book" href="ajout_livre.html?isbn=${book.industryIdentifiers[0].identifier}">
            <span class="title">${book.title}</span>
            <span class="authors">${book.authors.join(', ')}</span>
            <span class="description" title="${book.description}"><i class="fas fa-info-circle"></i></span>
        </a>
    </li>`
}

function getBooks() {
    fetch('/books')
        .then((res) => res.json())
        .then((books = []) => {
            document.getElementById('to-read').innerHTML = books.map(bookToLine).filter((book) => book['to-read']).join(' ');
            document.getElementById('wishes').innerHTML = books.map(bookToLine).filter((book) => book['wishes']).join(' ');
            document.getElementById('lended').innerHTML = books.map(bookToLine).filter((book) => book['lended']).join(' ');
            document.getElementById('to-kend').innerHTML = books.map(bookToLine).filter((book) => book['to-kend']).join(' ');
        });
}

getBooks();
