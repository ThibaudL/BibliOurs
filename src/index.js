const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');
const {EmpruntsService} = require("./server/emprunts");
const {IsbnService} = require("./server/isbn");
const {BooksService} = require("./server/books");


app.use('/', express.static(path.join(__dirname, 'app')))


// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

new BooksService(app);
new IsbnService(app);
new EmpruntsService(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


