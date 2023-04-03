// Import stylesheets
import './style.css';

interface AddFn {
  (a: number, b: number): number;
} 

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
}


interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}



class Person implements Greetable {
  name?: string;
  age = 32;

  constructor(n?: string) {
    if(n) {
      this.name = n;
    } 
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user1: Person;
user1 = new Person();
user1.greet('Hello');
console.log(user1);