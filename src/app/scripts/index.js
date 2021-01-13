function createSpanFortAttribute(attribute, content) {
    const title = document.createElement('span');
    const titleClass = document.createAttribute('class');
    titleClass.value = attribute;
    title.setAttributeNode(titleClass);
    title.appendChild(content)
    return title;
}

function getBooks(){
    fetch('/books')
        .then((res) => res.json())
        .then((books = []) => {
            console.log(books);
            books.map((book) => {
                const li = document.createElement('li');
                li.appendChild(createSpanFortAttribute('title', document.createTextNode(book.title)));
                li.appendChild(createSpanFortAttribute('authors', document.createTextNode(book.authors.join(', '))));
                let infobulle = document.createElement('i');
                const titleDescription = document.createAttribute('title');
                titleDescription.value = book.description;
                infobulle.setAttributeNode(titleDescription);
                const titleClass = document.createAttribute('class');
                titleClass.value = "fas fa-info-circle";
                infobulle.setAttributeNode(titleClass);
                li.appendChild(createSpanFortAttribute('description', infobulle));
                return li;
            })
            .forEach((li) => {
                document.getElementById('to-read')
                    .appendChild(li)
            });

        })
}
getBooks();
document.getElement
