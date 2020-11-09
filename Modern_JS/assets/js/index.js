/*============================
# Intro
=============================*/
// JavaScript is a dynamic programming language of a browser that gives a website more functionalities

// Alert
// alert('"Welcome to Modern JavaScript"');

// Console
// console.log('Hello there!');
// console.error('This an error');
// console.warn('Warning!!!');

// ==== End Intro === //

/*============================
# Variables
============================*/
// var, let and const
// But in modern js we do not use var since it is globally scoped that is when we declare variable inside the if statement block and there is another same variable declared using var outside the block, this might cause some confusion. 
// Hence we mostly use let and const which have a block-level scope.

// Difference between let and const
// With let you can reassign values

// Examples
let age = 30;
age = 31
console.log(age);

let score;
score = 10;
console.log(score);

// With const you can only assign a constant value thus it can't be directly reassigned
// Example
const monthsOfTheYear = 12;
// With const we can not even initialize variable
// Example
// const grade;
// console.log(grade);

// Data Types
// Strings, Numbers, Boolean, null, undefined and Symbol

// Strings
// Examples
const firsName = 'Prosper';
const lastName = 'Mbuma';

// Numbers
// Note there is floating point or decimal number, they are all just numbers
// Examples
const myAge = 25;
const rating = 5.0;

// Boolean
// Examples
const isCool = true;

// null
// Example
const x = null;

// undefined
// Examples
const y = undefined;
let z;

// Testing variables types
console.log(typeof rating);

// Concatenation
// The old way
console.log('My name is ' + firsName + ' ' + lastName + ' and I am ' + myAge);
// The modern way
// We use Template String
// Here we use backticks instead of quotes
console.log(`My name is ${firsName} ${lastName} and I am ${myAge}`);
// We can also assing this to a variable
const selfIntro = `My name is ${firsName} ${lastName} and I am ${myAge}`;
console.log(selfIntro);

// String Property

const s = 'Hello World';

console.log(s.length);

// String Method

const t = 'Hello World';

console.log(s.toUpperCase());

// This takes two indexes
console.log(s.substring(0, 7));

// We can also tackle on another method
console.log(s.substring(0, 8).toUpperCase());

// Splitting characters into an array
console.log(s.split(''));

const tech = 'Technology, Programming, Computer, IT, Coding, Computer Science';
console.log(tech.split(','));

// ==== End Variables ==== //

/*============================
# Arrays
=============================*/
// Are the variables that hold multiple values, it is an object

// Creating an array using constructor
const numbers = new Array(1, 2, 3, 4, 5);
// new Array() is the constructor
console.log(numbers);

// Just use square blackets notation and Using no constructor
const fruits = ['Apples', 'Oranges', 'Mangoes', 'Bananas'];
console.log(fruits);

// In javascript we can have multiple data types within the same array
const fruits_2 = ['Apples', 'Oranges', 'Mangoes', 'Bananas', 30, true];
console.log(fruits_2);

// Accessing a single value
console.log(`I usually eat ${fruits_2[3].toUpperCase()}`);

// Adding value to the end of an array
// The normal way
fruits[4] = 'Pears';
console.log(fruits);

// The best way
// Using push() method to add value to the very end of an array
fruits_2.push(4.5);
console.log(fruits_2);

// Adding value to the very begining of an array
fruits.unshift('Pineapples');
console.log(fruits);

// Removing value from the very end of an array
fruits_2.pop();
console.log(fruits_2);

// Checking something that if it is an array
console.log(Array.isArray(fruits));

// Get the index of a value
console.log(fruits_2.indexOf('Bananas'));

// ==== End Arrays ==== //

/*============================
# Object Literals
=============================*/
const person = {
    first_Name: "Prosper",
    last_Name: "Mbuma",
    age: 25,
    hobbies: ['music', 'coding', 'singing', 'playing piano'],
    // Embeded Object
    address: {
        street: '203 main st',
        city: 'Dar es salaam',
        district: 'Kinondoni'
    }
}

console.log(person);

// Accessing a single value
console.log(person.first_Name + ' lives in ');
console.log(person.address.city);

// Accessing a multiple values
console.log(`${person.first_Name} ${person.last_Name} loves ${person.hobbies[2]} and ${person.hobbies[3]}`);
console.log(person.first_Name + ' listens to ' + person.hobbies[0] + ' always');

// Pulling properties from the object
const { first_Name, last_Name } = person;
console.log(last_Name + ' is from ');

//  Pulling properties from the embeded object
const { address: { city } } = person;
console.log(city);

// Adding property into object
person.email = 'prospermbuma@gmail.com';
console.log(person);

// Arrays of objects
// This is similar to JSON syntax
const todos = [
    {
        id: 1,
        text: 'Cleaning house',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Going to gym',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Meeting team',
        isCompleted: false
    },
]

console.log(todos);
console.log(todos[1].text);

// Converting JS into JSON ready to send it to the server
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

// ==== End Objects Literals ==== //

/*============================
# Loops
=============================*/
// For Loop
for (let i = 0; i < 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

// While Loop

let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// Looping through an array
// The normal way (FOR LOOP)
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

// The best way (FOR OF LOOP)
// The todo is just a variable that we are going to declare next in the below for loop
for (let todo of todos) {
    console.log(todo.id);
}

// High order array methods - The best way to do iteration with arrays
// forEach, map and filter

// forEach
todos.forEach(function (todo) {
    console.log(todo.text);
});

// Using arrow function
todos.forEach(todo => console.log(todo.isCompleted));

// map
const todoText = todos.map(function (todo) {
    return todo.text;
});

console.log(todoText);

// filter
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

// Chain on an array method (Appending methods)
const todoComplete = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});

console.log(todoComplete);

// ==== End Loops ==== //

/*============================
# Conditionals
=============================*/
// Starting with double equals ==
// With double equals, you can even change the number into a string and still it will be consider the same
// const ifState = 10;
const ifState = '10';

if (ifState == 10) {
    console.log('x is 10');
}

// But with triple ===
// This checks that if the value is actual equal in term of data type
// That if it is a number or a string
// const ifState = 10;
const ifStatem = '10';

if (ifStatem === 10) {
    console.log('x is 10');
}
else {
    console.log('Data types are not the same');
}

// Tunnel operator (A shortcut for if statement)
const proNumber = 10;

const proColor = proNumber > 10 ? 'red' : 'blue';

console.log(proColor);

// Switches
switch (proColor) {
    case 'red':
        console.log('The color is red');
        break;
    case 'blue':
        console.log('The color is blue');
        break;
    default:
        console.log('The color is Neither red Nor blue');
        break;
}

// ==== End Conditionals ==== //

/*============================
# functions
=============================*/
function addNUms(num1 = 1, num2 = 1) {
    return num1 + num2;
}

console.log(addNUms(6, 6));

// Arrow function
// With return
const MinusNums = (num, num0 = 9) => num - num0;

console.log(MinusNums(8));

// If you only one value then you do not need parenthesis
const MinusNum = num_min => num_min - 7;

console.log(MinusNum(8));

// You can do the above with curly braces as well
const MinusNums_1 = (num_0, num0_0 = 19) => {
    return num_0 - num0_0;
}

console.log(MinusNums_1(81));

// Without return
const MinusNums_2 = (num_1 = 18, num_2 = 9) => console.log(num_1 - num_2);

MinusNums_2();

// You can do the above with curly braces as well
const MinusNums_3 = (num_3 = 18, num_4 = 39) => {
    console.log(num_3 - num_4);
}

MinusNums_3();

// ==== End functions ==== //

/*===================================
# Object Oriented Programming (OOP)
====================================*/
// Constructor function
// The function's name has to start with capital letter
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob;
    // Dealing with date
    this.dob = new Date(dob);
    // Applying methods
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('Prosper', 'Mbuma', '05-15-1995');
const person2 = new Person('Patricia', 'John', '05-03-1996');

console.log(person1);
console.log(person2);
console.log(person2.firstName + ' was born in ');
console.log(person2.dob.getFullYear());
console.log(`${person1.getFullName()} was born in `);
console.log(person1.getBirthYear());

// Dealing with Prototypes
// Constructor function
// The function's name has to start with capital letter
function Person_1(first_Name, last_Name, do_b) {
    this.first_Name = first_Name;
    this.last_Name = last_Name;
    // this.do_b = do_b;
    // Dealing with date
    this.do_b = new Date(do_b);
}

// Prototypes
Person_1.prototype.getFull_Name = function () {
    return `${this.first_Name} ${this.last_Name}`;
}

Person_1.prototype.getBirth_Year = function () {
    return this.do_b.getFullYear();
}

// Instantiate object
const person3 = new Person_1('Victoria', 'Mbuma', '03-24-1993');
const person4 = new Person_1('Joseph', 'Nicholas', '04-17-1999');

console.log(person3);
console.log(person3.getFull_Name());

// Class
// Does the same as the above function
class Person_2 {
    constructor(first_Name2, last_Name2, do_b2) {
        this.first_Name2 = first_Name2;
        this.last_Name2 = last_Name2;
        this.do_b2 = new Date(do_b2);
    }

    getFull_Name2() {
        return `${this.first_Name2} ${this.last_Name2}`;
    }

    getBirth_Year2() {
        return this.do_b2.getFullYear();
    }
}

// Instantiate object
const person5 = new Person_2('Nicholas', 'Joseph', '07-07-1964');

console.log(person5);
console.log(person5.getFull_Name2());

// ===== End Object oriented programming ===== //

/*============================
# DOM (Document Object Model)
=============================*/
// Window object - The parent object of the browser

console.log(window);
console.log(window.document);

// Selectors
// Single element selectors

// This below will the first h1 if there would be more than one h1
// Recommended to use querySelectors
document.querySelector('h1');

// Dealing with the form
console.log(document.querySelector('.form'));

const buttonEvent = document.querySelector('#btn');


// const form = document.getElementById('myForm');
const form = document.querySelector('#myForm');

console.log(form);

form.addEventListener('click', (e) => {
    e.preventDefault();

    // Console target
    console.log(e.target);
    console.log(e.target.id);

    const userName = document.querySelector('#username');
    const userEmail = document.querySelector('#email');
    const userList = document.querySelector('.users');
    const msg = document.querySelector('.msg');

    // Form validation
    if (userName.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Please fill in the username';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else if (userEmail.value === '') {
        msg.style.display = 'block';
        msg.innerHTML = 'Please fill in the email';
        msg.style.background = 'red';

        // SettTimeOut to remove the msg div
        setTimeout(function () {
            msg.style.display = 'none';
        }, 3000);
    }
    else {
        msg.style.display = 'block';
        msg.innerHTML = 'Added successfully';
        msg.style.background = 'green';

        // SettTimeOut to remove the msg div
        setTimeout(() => msg.style.display = 'none', 3000);

        // Adding users and displaying their data to the document
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(
            `${userName.value} : ${userEmail.value}`
        ))

        userList.appendChild(li);

        // clear fields
        userName.value = '';
        userEmail.value = '';
    }

    // switch (userName, userEmail) {
    //     case '':
    //         document.querySelector('.add_user').textContent = 'Please fill in the required field';
    //         document.querySelector('.add_user').style.color = 'red';
    //         break;
    //     default:
    //         document.querySelector('.add_user').textContent = 'User has been added successfully';
    //         document.querySelector('.add_user').style.color = 'green';
    //         break;
    // }

    // Get username and email of the users and console them using class
    // class constructor
    class User {
        constructor(username, email) {
            this.username = username;
            this.email = email;
        }

        getUserName() {
            return `${this.username}`;
        }

        getUserEmail() {
            return `${this.email}`;
        }
    }

    // Instantiate object
    const users = new User(userName.value, userEmail.value);

    console.log(users);
    console.log(users.getUserName());
    console.log(users.getUserEmail());



});

// Applying some animation to "Express  yourself" text
const express = document.querySelector('.express');

express.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.querySelector('.express').classList.add('scale');
});

express.addEventListener('mouseleave', (e) => {
    e.preventDefault();
    document.querySelector('.express').classList.add('scale');
});

// Multiple elements selectors

// This below gives NodeList of which we can apply array methods on it
// Recommended to use this
console.log(document.querySelectorAll('input'));

// This below gives HTMLCollections
// Hence we can not use array methods here and in order to use array methods here, we need to manually convert this (HTMLCollection) to an array
console.log(document.getElementsByClassName('container'));

console.log(document.getElementsByTagName('section'));

// Loop through inputs
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => console.log(input));

// ==== End DOM ==== //