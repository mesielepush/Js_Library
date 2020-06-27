let myLibrary = [];

function Book(args) {
  this.author = args.author;
  this.pages = args.pages;
  this.title = args.title;
  this.status = args.status;
  this.actions = args.actions;
}
const pigsFly = false;
const add = (book) => {
  myLibrary.push(book);
};
const inver = (status) => {
  if (status === true) {
    return false;
  }

  return true;
};
const stat = (status) => {
  if (status === true) {
    return 'Read';
  }

  return 'Not Read';
};
function closeModal() {
  document.getElementById('close_modal').click();
}
function cleanForm() {
  const fields = ['title', 'author', 'pages', 'status'];
  fields.forEach((item) => {
    document.querySelector(`#${item}`).value = '';
  });
}
const bookShell = document.getElementById('main_page');

function render() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  bookShell.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const template = `
        <div class="container book d-flex text-center">
          <span class='Title' >  ${book.title} </span>
          <span class='Author' > ${book.author} </span>
          <span class='Pages'  > ${book.pages}</span>
          <button onclick=' changeStatus(${index},${book.status}) ' class="Status_${book.status} " id='status'>${stat(book.status)}</button>
          <button onclick='deleteBookFromLibrary(${index})'  class="Actions delete is-vcentered text-center">X</button>
        </div>`;
    bookShell.innerHTML += template;
  });
}
function addBook() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const status = document.querySelector('#status').value === 'true';
  const book = new Book({
    title,
    author,
    pages,
    status,
    actions: false,
  });

  add(book);
  render();
  closeModal();
  cleanForm();
}

function deleteBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  render();
}

function changeStatus(index, status) {
  myLibrary[index].status = inver(status);
  render();
}

document.getElementById('addItem').addEventListener('click', addBook);


if (localStorage.getItem('myLibrary')) {
  const myLibraryLocal = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary = [];
  myLibraryLocal.forEach((item) => {
    myLibrary.push(new Book(item));
  });
}

const useless = () => {
  if (pigsFly) {
    deleteBookFromLibrary(1);
    changeStatus(0, true);
  }
};
useless();
render();