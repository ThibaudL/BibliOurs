let books;
const initialized = () => {
    console.warn("Database Books is ready")
    books = db.addCollection('books');
};
const path = require('path');
const loki = require('lokijs');
const db = new loki(path.join(__dirname, '../../data/books.db'), {
    autoload: true,
    autoloadCallback: initialized,
    autosave: true,
    autosaveInterval: 4000
});


exports.BooksService = class {
    constructor(app) {
        console.log("Starting Book services")
        app.post('/books', this.addBook);
        app.get('/books', this.getBooks);
        app.get('/books/isbn/:isbn', this.getBookByIsbn);
    }

    addBook(req, res) {
        books.insert(req.body);
        res.sendStatus(200);
    }

    getBooks(req, res) {
        res.send(books.data);
    }

    getBookByIsbn(req, res) {
        const book = books.data
            .filter((book) => book.industryIdentifiers
                .some(industry => industry.identifier === req.params.isbn)
            );
        if (book.length > 0) {
            res.send(book[0]);
        } else {
            res.sendStatus(204);
        }
    }
}
