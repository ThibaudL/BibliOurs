function createSpanFortAttribute(attribute, content) {
    const title = document.createElement('span');
    const titleClass = document.createAttribute('class');
    titleClass.value = attribute;
    title.setAttributeNode(titleClass);
    title.appendChild(content)
    return title;
}

function createIcon(classes) {
    let infobulle = document.createElement('i');
    const titleClass = document.createAttribute('class');
    titleClass.value = classes;
    infobulle.setAttributeNode(titleClass);
    return infobulle;
}

function attachTitle(destination, title) {
    const titleDescription = document.createAttribute('title');
    destination.setAttributeNode(titleDescription);
    titleDescription.value = title;
    return destination;
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
                li.appendChild(createSpanFortAttribute('description', attachTitle(createIcon("fas fa-info-circle"), book.description)));
                li.appendChild(createSpanFortAttribute('book-infos', createIcon("fas fa-book-open")));
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
