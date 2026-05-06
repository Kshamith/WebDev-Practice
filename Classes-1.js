// Create a class Person with:
/// A constructor that takes name and age.
/// A method introduce() that logs Hello, I'm <name> and I'm <age> years old.
/// Create two Person objects and call introduce() on each.
/// Modify Person so that if age is not provided, it defaults to 18.
/// Create new Person("Alice") and check that the age is 18.

class Person{
  constructor(name, age){
    this.name = name;
    if (age == undefined){
    this.age = 18;
    }else{
     this.age = age; 
    }
  }
  
  
  
  introduce(){
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const PrintPerson = new Person("Aarna");
PrintPerson.introduce();
