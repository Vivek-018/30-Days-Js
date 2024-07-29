const person = {
  name: "abc",
  age: "24",
  PrintNameAge: function Print_Name_Age() {
    console.log(`Your Name :${this.name} and Age:${this.age}`);
    return true;
  },
};

export default person;
