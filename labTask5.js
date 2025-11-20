// DOM Elements
const bookTitleInput = document.getElementById('bookTitle');
const publicationYearInput = document.getElementById('publicationYear');
const addBookBtn = document.getElementById('addBookBtn');
const bookList = document.getElementById('bookList');
const bookTable = document.getElementById('bookTable');
const emptyMessage = document.getElementById('emptyMessage');
const titleError = document.getElementById('titleError');
const yearError = document.getElementById('yearError');

// Sample initial data
let books = [
    { title: 'ABC', year: 2022 }
];

// Initialize the application
function init() {
    renderBooks();
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    addBookBtn.addEventListener('click', addBook);
    
    // Allow adding book with Enter key
    bookTitleInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addBook();
    });
    
    publicationYearInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addBook();
    });
    
    // Input validation
    bookTitleInput.addEventListener('input', validateTitle);
    publicationYearInput.addEventListener('input', validateYear);
}

// Validate book title
function validateTitle() {
    const title = bookTitleInput.value.trim();
    
    if (title === '') {
        titleError.textContent = 'Book title is required';
        return false;
    } else if (title.length < 2) {
        titleError.textContent = 'Title must be at least 2 characters long';
        return false;
    } else {
        titleError.textContent = '';
        return true;
    }
}

// Validate publication year
function validateYear() {
    const year = parseInt(publicationYearInput.value);
    const currentYear = new Date().getFullYear();
    
    if (isNaN(year)) {
        yearError.textContent = 'Please enter a valid year';
        return false;
    } else if (year < 1000 || year > currentYear + 5) {
        yearError.textContent = `Year must be between 1000 and ${currentYear + 5}`;
        return false;
    } else {
        yearError.textContent = '';
        return true;
    }
}

// Add a new book to the library
function addBook() {
    const title = bookTitleInput.value.trim();
    const year = parseInt(publicationYearInput.value);
    
    // Validate inputs
    const isTitleValid = validateTitle();
    const isYearValid = validateYear();
    
    if (!isTitleValid || !isYearValid) {
        return;
    }
    
    // Add book to the array
    books.push({ title, year });
    
    // Clear form inputs
    bookTitleInput.value = '';
    publicationYearInput.value = '';
    
    // Re-render the book list
    renderBooks();
    
    // Focus back to title input for better UX
    bookTitleInput.focus();
}

// Remove a book from the library
function removeBook(index) {
    books.splice(index, 1);
    renderBooks();
}

// Render the book list
function renderBooks() {
    // Clear the current list
    bookList.innerHTML = '';
    
    // Show/hide empty message
    if (books.length === 0) {
        emptyMessage.classList.add('show');
        bookTable.style.display = 'none';
    } else {
        emptyMessage.classList.remove('show');
        bookTable.style.display = 'table';
        
        // Add each book to the table
        books.forEach((book, index) => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.year}</td>
                <td>
                    <button class="btn-delete" data-index="${index}">Delete</button>
                </td>
            `;
            
            bookList.appendChild(row);
        });
        
        // Add event listeners to delete buttons
        document.querySelectorAll('.btn-delete').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                removeBook(index);
            });
        });
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);