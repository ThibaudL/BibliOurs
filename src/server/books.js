let books;
const initialized = () => {
    console.warn("Database Books is ready")
    books = db.addCollection('books');
};
const path = require('path');
const loki = require('lokijs');
const db = new loki(path.join(__dirname, '../../data/books.db'),{
    autoload: true,
    autoloadCallback : initialized,
    autosave: true,
    autosaveInterval: 4000
});


exports.BooksService = class {
    constructor(app) {
        console.log("Starting Book services")
        app.post('/books', this.addBook);
        app.get('/books', this.getBooks)
    }

    addBook(req, res) {
        books.insert(req.body);
        res.sendStatus(200);
    }

    getBooks(req, res) {
        res.send(books.data);
    }
}
