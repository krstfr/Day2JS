//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

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

for (let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
    console.log(
        person3[Object.keys(person3)[i]]
    )}

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

class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
    }

    returnInfo(){
        return `Name: ${this.name}\n Age: ${this.age}`
    }
  
    
}

let Joe = new Person('Joe', 32);
console.log(Joe)
console.log(Joe.returnInfo())

let countUp = ()=>{
    let counter = `${this.age}`; 
    console.log('Hit')
    function addAge(){return counter++}//adds +1 to the counter variable
    return addAge
}
myAddAge = countUp() // this returns the countUp + 1 
console.log(myAddAge());
console.log(myAddAge());

let Sam = new Person('Sam', 25)
console.log(Sam)
console.log(Sam.returnInfo)
console.log(myAddAge(Sam));
console.log(myAddAge(Sam));

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

S1 = 'Car'//3
s3 = 'Personality'//11
let myPromise = new Promise(function(myResolve, myReject) {
    let x = len.str;
  
  // some code (try to change x to 5)
  
    if (x > 10) {
      myResolve("Big Word");
    } else if (x < 10){
      myReject("Small Number");
    }
  });
  
  Promise(s3);