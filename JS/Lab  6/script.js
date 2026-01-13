class Shape {
    static count = 0;
    
    constructor() {
        if(this.constructor == Shape) {
            throw new Error("Class is of abstract type and can't be instantiated");
        };
        Shape.count++;
    }
    
    getArea() {return 0;}

    getPerimeter() {return 0;}

    static getCount() { return Shape.count; }

    toString() {
        return `Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
    }
}
class Circle extends Shape {
    #radius;

    constructor(radius) {
        super();
        this.#radius = radius;
    }
    getArea() {
        return Math.PI * this.#radius * this.#radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.#radius;
    }
}
class Rectangle extends Shape {
    #width;
    #height;

    constructor(width, height) {
        super();
        this.#width = width;
        this.#height = height;
    }

    getArea() {
        return this.#width * this.#height;
    }

    getPerimeter() {
        return 2 * (this.#width + this.#height);
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.getArea());
console.log("Circle Perimeter:", circle.getPerimeter());

const rectangle = new Rectangle(4, 6);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Perimeter:", rectangle.getPerimeter());

console.log("Total Shapes Created:", Shape.getCount());


///////////////////////////////////////////////////////////////////

class Box {
    static count = 0;
    #length;
    #width;
    #height;
    #volume;
    #material;
    #content;
    #numOfBooks;

    constructor(length, width, height, material){
        this.#length = length;
        this.#width = width;
        this.#height = height;
        this.#material = material;
        this.#volume = this.#length * this.#width * this.#height;
        this.#content = [];
        this.#numOfBooks = 0;
        Box.count++;
    }
    
    addBook(book){
        if(book instanceof Book){
            this.#content.push(book);
            this.#numOfBooks++;
        } else {
            throw new Error("Only Book instances can be added to the box.");
        }
    }


    removeBook(value){
        this.#content = this.#content.filter(book => book.title !== value && book.author !== value);
        this.#numOfBooks = this.#content.length;
    }

    get length() { return this.#length; }

    get width() { return this.#width; }

    get height() { return this.#height; }

    get volume() { return this.#volume; }

    get material() { return this.#material; }

    get content()  { return [...this.#content]; }

    get numOfBooks() { return this.#numOfBooks; }

    static getCount() { return Box.count; }  

    toString(){
        return `Box [Length: ${this.#length}, Width: ${this.#width}, Height: ${this.#height}, Volume: ${this.#volume}, Material: ${this.#material}, Number of Books: ${this.#numOfBooks}]`;
    }

    valueOf(){
        return this.#numOfBooks;
    }    
}

class Book {
    #title;
    #author;
    #publisher;
    #numOfPages;
    #numOfChapters;
    #numOfCopies;

    constructor(title, author, publisher, numOfPages, numOfChapters, numOfCopies){
        this.#title = title;
        this.#author = author;
        this.#publisher = publisher;
        this.#numOfPages = numOfPages;
        this.#numOfChapters = numOfChapters;
        this.#numOfCopies = numOfCopies;
    }

    get title() { return this.#title; }

    get author() { return this.#author; }

    get publisher() { return this.#publisher; }  

    get numOfPages() { return this.#numOfPages; }
    
    get numOfChapters() { return this.#numOfChapters; }

    get numOfCopies() { return this.#numOfCopies; }

    toString(){
        return `Book [Title: ${this.#title}, Author: ${this.#author}, Publisher: ${this.#publisher}, Pages: ${this.#numOfPages}, Chapters: ${this.#numOfChapters}, Copies: ${this.#numOfCopies}]`;
    }
}

const box1 = new Box(10, 5, 8, "Cardboard");
const book1 = new Book("JavaScript Basics", "John Doe", "Tech Press", 300, 12, 5);
const book2 = new Book("Advanced JS", "Jane Smith", "Code Publishers", 450, 20, 3);

box1.addBook(book1);
box1.addBook(book2);

console.log(box1.toString());
console.log("Box Content:", box1.content.map(book => book.toString()));
console.log("Total Boxes Created:", Box.getCount());

box1.removeBook("JavaScript Basics");
console.log("After removing a book, Box Content:", box1.content.map(book => book.toString()));
console.log("Number of Books in Box:", box1.numOfBooks);   