/*Write a program in JS, to demonstrate the exporting and importing of different data types of JS
(such as objects, arrays, class, functions) using ES6 modules.*/


export const rollNumbers = [1, 18, 34, 46, 50];

export const favBooks = [
    'Palpasa Cafe',
    'It Ends with us',
    'The art of Public Speaking',
    'The atomic habits'
];

 function display() {
    console.log ( rollNumbers, favBooks);
}
export {display as print};

export  class name  {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }