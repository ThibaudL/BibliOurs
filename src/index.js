const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const {IsbnService} = require("./server/isbn");

new IsbnService(app);

app.use('/', express.static(path.join(__dirname, 'app')))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


