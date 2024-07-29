// Task1
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello ${this.name} and your age is ${this.age}`);
  }
  updateage(age) {
    this.age = age;
  }
}

const person1 = new person("kishan", 24);
// person1.greeting();

// Task 2

const person2 = new person("ram", 48);
// console.log(person2); // name-> ram , age-> 48
person2.updateage(28);
// console.log(person2); // name-> ram , age-> 28

// Task3
class student extends person {
  constructor(stuId, name, age) {
    super(name, age);
    this.stuId = stuId;
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

const student1 = new student(123, "rahul", 24);
console.log(student1.returnId());

// Task4
student1.greeting();
