let library = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  library.push(book);
}

let index = 0;

function rowDelete() {
  const td = event.target.parentNode;
  const tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}

function addBookShelf() {
  const bookshelf = document.querySelector('#table-body');

  const shelf = document.createElement('tr');
  shelf.setAttribute('id', `${index}row`);
  index += 1;
  bookshelf.appendChild(shelf);

  const bookTitle = document.createElement('td');
  bookTitle.textContent = library[library.length - 1].title;
  shelf.appendChild(bookTitle);

  const bookAuthor = document.createElement('td');
  bookAuthor.textContent = library[library.length - 1].author;
  shelf.appendChild(bookAuthor);

  const bookPages = document.createElement('td');
  bookPages.textContent = library[library.length - 1].pages;
  shelf.appendChild(bookPages);

  const bookStatus = document.createElement('td');
  bookStatus.textContent = library[library.length - 1].status;
  shelf.appendChild(bookStatus);

  const bookDelete = document.createElement('td');
  shelf.appendChild(bookDelete);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    rowDelete();
  });
  bookDelete.appendChild(deleteBtn);
}

function inputValues() {
  addBookToLibrary(
    document.querySelector('#title').value,
    document.querySelector('#author').value,
    document.querySelector('#pages').value,
    document.querySelector('#status').value
  );
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
  inputValues();
  addBookShelf();
});
