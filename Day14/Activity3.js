// Task5
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genricgreet() {
    console.log("Hello , Welcome to My channel !");
    // return true; -> uncommet to get true instead of undefined in console
  }

  greeting() {
    console.log(`Hello ${this.name} and your age is ${this.age}`);
  }
  updateage(age) {
    this.age = age;
  }
}
// console.log(person.genricgreet());

// Task6
class student extends person {
  static noOfStudents = 0;
  constructor(stuId, name, age) {
    super(name, age);
    this.stuId = stuId;
    student.noOfStudents += 1;
  }

  returnId() {
    return this.stuId;
  }

  greeting() {
    console.log(
      `Hello ${this.name} and your age is ${this.age} and your id is ${this.stuId}`
    );
  }
}

const student1 = new student(123, "ram", 24);
const student2 = new student(123, "ram", 24);
const student3 = new student(123, "ram", 24);
const student4 = new student(123, "ram", 24);

console.log(student.noOfStudents);
