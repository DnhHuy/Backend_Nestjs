// Bài Tập 1: Quản lý học sinh
// Tạo một lớp Student với các thuộc tính:
// - name (string)
// - age (number)
// - grade (string)
// Viết một phương thức để hiển thị thông tin của học sinh.

class Student {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const student = new Student("HHH", 30, "A");
student.displayInfo();

// Bài Tập 2: Hệ thống ngân hàng
// - Tạo lớp BankAccount với các thuộc tính accountNumber, balance.
// - Tạo các phương thức deposit(amount) và withdraw(amount) để cập nhật số dư.
// - Tạo lớp SavingAccount kế thừa BankAccount, thêm thuộc tính interestRate và phương thức
// calculateInterest().

class BankAccount {
  accountNumber: string;
  balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
}

const account = new BankAccount("123456", 1000);
account.deposit(500);
console.log(account.balance);

class SavingAccount extends BankAccount {
  interestRate: number;

  constructor(accountNumber: string, balance: number, interestRate: number) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  calculateInterest() {
    return this.balance * this.interestRate;
  }
}

const savingAccount = new SavingAccount("654321", 2000, 0.05);
console.log(savingAccount.calculateInterest());
// Bài Tập 3: Quản lý thư viện
// - Tạo lớp Book với các thuộc tính title, author, ISBN.
// - Tạo lớp Library có danh sách các cuốn sách (books) và các phương thức:
// - addBook(book: Book): Thêm sách.
// - removeBook(ISBN: string): Xóa sách theo ISBN.
// - findBook(title: string): Tìm sách theo tên.

class Book {
  title: string;
  author: string;
  ISBN: string;

  constructor(title: string, author: string, ISBN: string) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }
}

class Library {
  books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  removeBook(ISBN: string) {
    this.books = this.books.filter((book) => book.ISBN !== ISBN);
  }

  findBook(title: string) {
    return this.books.find((book) => book.title === title);
  }
}

const library = new Library();
const book1 = new Book("B", "e", "5454");
const book2 = new Book("grgr", "rgr", "97");

library.addBook(book1);
library.addBook(book2);

console.log(library.findBook("B"));

// Bài Tập 4: Hình học
// - Tạo lớp Shape (trừu tượng) với phương thức calculateArea().
// - Tạo lớp Rectangle và Circle kế thừa từ Shape, triển khai calculateArea() tương ứng.
// - Viết chương trình tính diện tích các hình và hiển thị kết quả.

class Shape {
  calculateArea(): number {
    throw new Error("Method not implemented.");
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea());
const circle = new Circle(2);
console.log(circle.calculateArea());

// Bài Tập 5: Quản lý nhân viên
// - Tạo lớp Employee với các thuộc tính: name, position, salary.
// - Kế thừa lớp Employee thành các lớp Manager và Developer, thêm phương thức getDetails().
// - Tạo danh sách nhân viên và in thông tin chi tiết.

class Employee {
  name: string;
  position: string;
  salary: number;

  constructor(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
  getDetails() {
    return `Name: ${this.name}, Position: ${this.position}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number) {
    super(name, "Manager", salary);
  }
}

class Developer extends Employee {
  constructor(name: string, salary: number) {
    super(name, "Developer", salary);
  }
}

const employees: Employee[] = [
  new Manager("kh", 46000),
  new Developer("ll", 431475),
];

employees.forEach((employee) => {
  console.log(employee.getDetails());
});
