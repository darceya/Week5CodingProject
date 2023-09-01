let project = "Week 5"


console.log(project); 

class Student {
    constructor(firstName, lastName, phoneNumber, grade) {
      this.firstName = firstName; 
      this.lastName = lastName; 
      this.phoneNumber = phoneNumber; 
      this.grade = grade; 
    }
    introduce() {
      console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`); 
    }
  }
  let Student1 = new Student('Tom', 'Hood', '4256459877', 'A'); 
  let Student2 = new Student('Mo', 'Nope', '7148905541', 'C');
  
  Student1.introduce();
  Student2.introduce(); 