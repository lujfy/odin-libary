console.log("hi")

let myLibary = [] ;

function Book(title ,author , pages , read ) {
  this.title = title
  this.author = author 
  this.pages = pages 
  this.read = read
}

Book.prototype.toggleRead = function() {
  this.read = !this.read
}

function toggleRead(index) {
  myLibary[index].toggleRead() ;
  render()
}

function render(){
  let libaryEl = document.querySelector('.libary') ;
  libaryEl.innerHTML = '' ;

  for (let i = 0 ; i <= myLibary.length ; i++ ) {
    let book = myLibary[i]
    let bookEl = document.createElement('div')
    bookEl.innerHTML = `
      <div class="Book-card">
        <h3>${book.title}</h3>
        <p>written by : ${book.author} </p>
        <p>this book has : ${book.pages} </p>
        <p class="book-status">${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="toggle-read-btn" onClick="toggleRead(${i})">Read status</button>
        <button class="remove-book-btn" onClick="removeBook(${i})">Remove Book</button>
      </div>
    `
  
    libaryEl.appendChild(bookEl);
  } 

}

function addBook() {
  let title = document.querySelector('#title').value
  let author = document.getElementById('author').value
  let pages = document.getElementById('pages').value
  let read = document.getElementById('read').value
  
  let newBook = new Book(title , author , pages , read)

  myLibary.push(newBook) ;
  render()
}

function removeBook(index) {
  myLibary.splice(index , 1)
  render()
}

let newBookBtn = document.querySelector("#new-book-btn")

newBookBtn.addEventListener("click" , function() {
  let newBookForm = document.querySelector("#new-book-form")
  newBookForm.style.display = "flex" ;

})

function Done() {
  let newBookForm = document.querySelector("#new-book-form")
  newBookForm.style.display = "none" ;
}

document.querySelector('#new-book-form').addEventListener('submit' , function(event) {
  event.preventDefault() ;
  addBook();
})