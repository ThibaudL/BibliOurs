var isbn = require('node-isbn-catalogue');

exports.IsbnService = class {
    constructor(app) {
        console.log("Starting ISBN services")

        app.get('/isbn/:isbn', (req, res) => {
            isbn.resolve(req.params.isbn, function (err, book) {
                if (err) {
                    res.sendStatus(404);
                    console.error("Book not found", err);
                } else {
                    res.send(book);
                }
            });
        })
    }
}
