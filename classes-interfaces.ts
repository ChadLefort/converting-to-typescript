type Skills = 'Javascript' | 'C#' | 'SQL Server' | 'Ruby' | 'Java';

interface IUser {
  name: string;
  age: number | string;
  skills?: Skills[];
}

class User implements IUser {
  public constructor(name: string, age: number | string, skills?: Skills[]) {
    this.name = name;
    this.age = age;

    if (skills) {
      this.skills = skills;
    }
  }

  readonly name: string;
  readonly age: number | string;
  skills: Skills[];

  getSkills = () => (this.skills ? this.joinSkills() : 'No skills');
  sayHello = () => `Hello, I'm ${this.name} and I'm ${this.age} years old!`;
  private joinSkills = () => `${this.name}'s Skills: ${this.skills.join(', ')}`;
}

const mySkills: Skills[] = ['Javascript', 'C#', 'SQL Server'];
const userOne = new User('Chad', 27, mySkills);
const userTwo = new User('Bob', 'twenty one');

console.log(userOne.sayHello());
console.log(userOne.getSkills());
console.log(userTwo.sayHello());
console.log(userTwo.getSkills());

// userOne.age = 23; // Cannot reassign readonly properties after initialization
// userTwo.joinSkills() // Cannot call class method that is private
