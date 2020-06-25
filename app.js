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
  }
let updateStatusInLibrary = (index, status)=> {
myLibrary[index].status = status;
}

let uno = new Book({
    author:'pipi',
    pages:245,
    title:'Pipi popo',
    status:false,
    actions:false
})
add(uno)

let dos = new Book({
    author:'pichichi',
    pages:654,
    title:'popotitoti',
    status:false,
    actions:false
})
add(dos)

console.log(myLibrary)
console.log('lashdlkajshdlkj')
function render(){
    tableBody.innerHTML = '';
    myLibrary.forEach((book) => {
        template = `
        <div class="container book d-flex text-center">
            <span class='Title' >Title   </span>
            <span class='Author' >Author  </span>
            <span class='Pages'>Pages  </span>
            <span class='Status'>Status  </span>
            <span class='Actions'>Actions </span>
        </div>`;
        
    })
}
reder


    