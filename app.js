let myLibrary = [];

function Book(args){

    this.author = args.author;
    this.pages = args.pages;
    this.title = args.title;
    this.status = args.status;
    this.actions = args.actions;
}
let add = (book)=>{
    myLibrary.push(book)
}
let deleteBookFromLibrary = (index)=>{
    myLibrary.splice(index, 1);
    render();
  }

let changeStatus = (index, status)=> {
    let = inver = (status)=>{
        if (status === true){
            return false
        }
        else{
            return true
        }
    } 
    myLibrary[index].status = inver(status);
    console.log('URRRRRRRRR')
    render();
}
function closeModal() {
    document.getElementById('close_modal').click();
}
function cleanForm() {
    const fields = ['title', 'author', 'pages', 'status'];
    fields.forEach((item) => {
      document.querySelector(`#${item}`).value = '';
    });
  }

function addBook() {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('#status').value === true;
    const book = new Book({title:title, 
                            author:author,
                            pages: pages,
                            status: status,
                            actions:false
                        });

    add(book);
    render();
    closeModal();
    cleanForm();
  }


const book_shell = document.getElementById('main_page')

function render(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    book_shell.innerHTML = '';
    myLibrary.forEach((book, index) => {
        let stat = (status) =>{
            if (status === true){
                return 'Read'
            }
            else{
                return 'Not Read'
            }
        }
        console.log(book.status)
        
        template = `
        <div class="container book d-flex text-center">
          <span class='Title' >  ${book.title  } </span>
          <span class='Author' > ${book.author } </span>
          <span class='Pages'  > ${book.pages  }</span>
          <button onclick=' changeStatus(${index},${book.status}) ' class="Status_${book.status} " id='status'>${stat(book.status)}</button>
          <button onclick='deleteBookFromLibrary(${index})'  class="Actions delete is-vcentered text-center">X</button>
        </div>`;
    book_shell.innerHTML += template
    });
}

document.getElementById('addItem').addEventListener('click', addBook);


if (localStorage.getItem('myLibrary')) {
  const myLibraryLocal = JSON.parse(localStorage.getItem('myLibrary'));
  myLibrary = [];
  myLibraryLocal.forEach((item) => {
     myLibrary.push(new Book(item)); 
  });
}


render()