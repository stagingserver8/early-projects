//Book Constructor

function Book(title, author, category) {
    this.title=title;
    this.author=author;
    this.category=category;
}

//UI Constructor

function UI () {}

UI.prototype.addBooktoList = function(book){
    const list = document.getElementById('book-list');
    // Create tr (table row element)
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML=`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.category}</td>
    <td><a href='#' class= "delete">X<a></td>`;
    list.appendChild(row);
}


UI.prototype.clearfields = function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('category').value='';
}


UI.prototype.showAlert = function(message, className) {
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


//Event Listeners for delete book
UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}

//Event listner for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get form values

    const   title = document.getElementById('title').value,
            author= document.getElementById('author').value,
            category= document.getElementById('category').value
    
    //Instantiate book
    const book = new Book(title, author, category)
    
    //Instantiate UI  
    const ui = new UI();

    //Validate 
    if(title==='' || author==='' || category==='') {
        //Error Alert
        ui.showAlert('Please fill in all fields', 'error')

    } else {

          // Add book to list 
        ui.addBooktoList(book);

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

//Show Message
ui.showAlert('Book Removed', 'success')
    e.preventDefault();
})

