var isbn = require('node-isbn-catalogue');


exports.IsbnService = class {
    constructor(app) {
        app.get('/isbn', (req, res) => {
            isbn.resolve('9782013235327', function (err, book) {
                if (err) {
                    res.sendStatus(404);
                    console.error("Book not found", error);
                } else {
                    res.send(book);
                }
            });
        })
    }
}
