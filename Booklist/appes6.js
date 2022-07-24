
let number = 0;

class Book {
    constructor(number, title, author, category) {
    this.number = number;
    this.title = title;
    this.author = author;
    this.category=category;
    }
}


class UI {
    addBooktoList(book) {
        const list = document.getElementById('book-list');
        // Create tr (table row element)
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML=`
        <td>${book.number}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.category}</td>
        <td><a href='#' class= "delete">X<a></td>`;
        list.appendChild(row);
    }


    showAlert(message,className) {

        // Create div
        const div = document.createElement('div');
        // Add class
        div.className = `alert ${className}`
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        //Insert Alert
        container.insertBefore(div, form);

        //Timeout after 3 sec
        setTimeout(function(){
            document.querySelector('.alert')
            .remove();

        }, 1500)
    }

    deleteBook(target) {

        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearfields() {
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('category').value='';
    }
}

// Add local storage Class
// You do not need to instantiate static methods

class Store {
    
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;


    }
    
    
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach(function(book){
            const  ui = new UI;
            //Add book UI
            ui.addBooktoList(book)

        })

    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(number) {
        //console.log(number)
        console.log("removing")
        const books = Store.getBooks();
        books.forEach(function(book,index){
            if(book.number = number) {
                console.log('removing')
                books.splice(index, 1);
            }
         

        });

        localStorage.setItem('books', JSON.stringify(books))

    }


}


// DOM LOAD EVENT
document.addEventListener('DOMContentLoaded', Store.displayBooks)

//Event Listeners for delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Event listner for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
    

    // Get form values from form

    const   title = document.getElementById('title').value,
            author= document.getElementById('author').value,
            category= document.getElementById('category').value
    
    //Instantiate book & add a 
    number = number +1;
    const book = new Book(number, title, author, category);
    
    //Instantiate UI  
    const ui = new UI();

    //Validate 

    if(title==='' || author==='' || category==='') {
        //Error Alert
        ui.showAlert('Please fill in all fields', 'error')

    } else {

          // Add book to list 
        ui.addBooktoList(book);

        //Add to Local Storage
        Store.addBook(book);

        // Show Success
        ui.showAlert('Book Added', 'success')

         // Clear fields
        ui.clearfields();
    }

    e.preventDefault();
})



// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

//Instantiate the UI
const ui = new UI();

//Delete book
ui.deleteBook(e.target);

// Remove from Local Storage
// Select Number 
Store.removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);

//Show Message
ui.showAlert('Book Removed', 'success')
    e.preventDefault();
})
