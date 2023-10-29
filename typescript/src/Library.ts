enum BookStatus {
  'AVAILABLE' = 'available',
  'BORROWED' = 'borrowed'
}

class Book {
  title: string;
  author: string;
  status: BookStatus;

  constructor(title: string, author: string ) {
    this.title = title;
    this.author = author;
    this.status = BookStatus.AVAILABLE;
  }

  borrow() {
    if(this.status === BookStatus.AVAILABLE) {
      this.status = BookStatus.BORROWED;
    } else {
      console.log(`The book ${this.title} has already been borrowed`);
    }
  }

  returnBook() {
    if(this.status === BookStatus.BORROWED) {
      this.status = BookStatus.AVAILABLE;
    } else {
      console.log(`The book ${this.title} has already been returned`);
    }
  }
}

class Patrons {
  name: string;
  borrowedBooks: Book[];
  constructor(name: string) {
    this.name = name;
    this.borrowedBooks = [];
  }

  borrow(book: Book) {
    if(book.status === BookStatus.AVAILABLE) {
      book.borrow();
      this.borrowedBooks.push(book);
    } else {
      console.log(`Book has already been borrowed`);
    }
  }

  return(book: Book) {
    if(book.status === BookStatus.BORROWED) {
      const bookIndex = this.borrowedBooks.indexOf(book);
      if(bookIndex > -1) {
        this.borrowedBooks.splice(bookIndex, 1);
        book.returnBook();
      } else {
        console.log(`${book.title} has already been returned`);
      }
    }
  }

}

class Library {
  books: Book[];
  patrons: Patrons[];

  constructor() {
    this.books = [];
    this.patrons = [];
  }

  addBook(title: string, author: string) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
  }

  addPatrons(name: string) {
    const patron = new Patrons('Mayukh');
    this.patrons.push(patron);
  }
}

const myLibrary = new Library();
myLibrary.addBook('The Great Gatsby', 'F. Scott Fitzgerald');
myLibrary.addPatrons('Alice');

const gatsby = myLibrary.books[0];
const alice = myLibrary.patrons[0];

alice.borrow(gatsby);
console.log(gatsby.status); // Expected output: "borrowed"
alice.return(gatsby);
console.log(gatsby.status); // Expected output: "available"