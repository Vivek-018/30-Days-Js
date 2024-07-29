// Task 7 and 8 
class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //   static genricgreet() {
  //     console.log("Hello , Welcome to My channel !");
  //     // return true; -> uncommet to get true instead of undefined in console
  //   }

  get fullName() {
    return `${this.firstName}${this.lastName}`;
  }
  set fullName(fullName) {
    const nameParts = fullName.split(" ");
    if (nameParts.length === 2) {
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    } else {
      console.error(
        "Invalid name enter : Please enter the fullname and lastname separted by space "
      );
    }
  }

  //   greeting() {
  //     console.log(`Hello ${this.name} and your age is ${this.age}`);
  //   }
  //   updateage(age) {
  //     this.age = age;
  //   }
}

const person1 = new person("ram", "singh", 24);
console.log(person1.fullName); // -> ramsingh

person1.fullName = "shyam verma";
console.log(person1.fullName); // -> now update name;

