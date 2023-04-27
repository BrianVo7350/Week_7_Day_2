// The main idea is to count all the occurring characters in a string.
//If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.
//https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        result[char] = (result[char] || 0) + 1;
      }
      return result;
    };

console.log(count('Sentence'))

//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
//that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

function max(arr) {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
        maxNumber = arr[i];
      }
    }
    return maxNumber;
  }
  
  function min(arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minNumber) {
        minNumber = arr[i];
      }
    }
    return minNumber;
  }

console.log(max([1,2,3,4,5]));
console.log(min([1,2,3,4,5]));


//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

function displayFavoriteFoods(person) {
  for (let property in person) {
    console.log(`Person 3 likes ${property} ${person[property]}`);

  }
}
  
let person3 = {
      pizza:["Deep Dish","South Side Thin Crust"],
      tacos:"Anything not from Taco bell",
      burgers:"Portillos Burgers",
      ice_cream:["Chocolate","Vanilla","Oreo"],
      shakes:[{
          oberwise:"Chocolate",
          dunkin:"Vanilla",
          culvers:"All of them",
          mcDonalds:"Sham-rock-shake",
          cupids_candies:"Chocolate Malt"
      }]
  }


console.log(displayFavoriteFoods(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.printInfo = function () {
    console.log(`This is ${this.name} and he is ${this.age} years old.`)
  }
}

Person.prototype.addAge = (years) => {
  this.age += years;
}
let person1 = new Person ('Shoha', 9000);
let person2 = new Person ('Travis', 8999);

person1.addAge(3);
person2.addAge(3);

person1.printInfo()
person2.printInfo()

//exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number" or word?
*/

function stringLength(str) {
  return new Promise((resolve, reject) => {
    if (str.length > 10) {
      resolve("Big word");
    } else {
      reject("Small number");
    }
  });
}

stringLength("StephenCurry!").then((result) => {
  console.log(result); 
}).catch((error) => {
  console.log(error);
});

stringLength("Kobe!").then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error); 
});


