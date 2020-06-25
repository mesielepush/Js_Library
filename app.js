let myLibrary = [];

let Book = (args)=>{
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