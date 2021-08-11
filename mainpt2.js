/////////////// Object Prototype ES-5 ////////////////////
function Car(make, model,year){
    this.make = make;
    this.model = model;
    this.year = year;

    //method 
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model} and has ${wheels} wheels and is ${color}`);
    }
}

let myCar = new Car ('Bentley', 'Mulsanne', 2020)
console.log(myCar);
myCar.make = "Rolls Royce" // channing the car make
console.log(myCar)
myCar.sunroof = 1 // adding a new element to the car
console.log(myCar)


myCar.make = "Bentley"
myCar.printInfo(4, "Green")

myCar.drive= function(){console.log("SKRTTT")}
console.log(myCar)
myCar.drive()

String.prototype.first_letter=function(){return this[0]}
console.log("Soulja Boy".first_letter())

////////////////// JS Classes /////////////////////////
class Human {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    returnInfo(){
        return `Name: ${this.name}\n Age: ${this.age}\n Gender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', 44, 'Female');
console.log(wilma)
console.log(wilma.returnInfo())

//class Baby(Human): <--Python
class Baby extends Human{
    constructor(name,age, gender, walking){
        super(name,age, gender,) // pulls info from parent function
        this.walking = walking
    }

    isBabyWalking(){
        if(this.walking){
            return "Baby is walking"
        }else{
            return "Baby not walking yet"
        }
    }
}

let babyBam = new Baby('BabyBam',1,'Male', true);
console.log(babyBam);
console.log(babyBam.returnInfo());
console.log(babyBam.isBabyWalking());

//////////////////// Javascript Closures ///////////////////////
// Basically it's an inner function of a function that has access to the outer functions variables

let countUp = function(){
    let counter = 0; //private variable
    console.log('Hit')
    function addOne(){return counter++}//adds +1 to the counter variable
    return addOne 

}
myAddone = countUp() // this returns the countUp + 1 
console.log(myAddone())
console.log(myAddone())
console.log(myAddone())


//Async functions


///////////// JAVA SCRIPT CALLBACKS ///////////////////
/* 
    Simply put: A callback is a function that is to be executed after another function
    has fnished its execution - hence the name callback. 
*/


//basic example
function first(){
    console.log(1)
}

function second (){
    console.log(2)
}
console.log()

first()
second()

//what if the execution is delayed
function first_delay(){
    setTimeout(first, 5000) //waits 5 seconds and then runs the function first
}

// first_delay()
// second() // 2 prints first, then after 5 seconds, it prints 1

///////////// CALL BACK FUNCTIONS /////////////////////
function doHW(subject, callback){
    console.log(`Starting my ${subject} homework`)
    callback()
}

function my_callback(){console.log("I have finished my homework")}
doHW("Math", my_callback)


////////// Createing a JS Promise /////////////////////

// const isEvenNumber = (num) =>{
//     return new Promise( (resolve, reject)=>{
//         if(num % 2 ==0){resolve(true)}
//         else{reject(false)}
//     })
// }

// isEvenNumber(9).then(
//     (result)=>{
//         console.log(`Even Number ${result}`)
//     }).catch(
//         (error) => {
//             console.log(`is Even Number is ${error}`)
//         }).then(
//             console.log("Thanks for testing a number")
//         )

//Normal function
function increase_salary(base,increase){
    const new_salary = base + increase;
    console.log(`Your new salary ${new_salary}`)
    return new_salary
}

increase_salary(30000, 3000)

//as a promise

function slow_addition(n1,n2){ 
    return new Promise(
        (resolve)=>{
            setTimeout(()=> resolve(n1+n2), 2000) // we wait two seconds for the function to complete
        }
    )
}
function increase_salary_slowly(base,increase){
    const new_salary = slow_addition(base,increase)
    console.log(`Your new salary ${new_salary}`)
    return new_salary
}
increase_salary_slowly(40000, 4000)// promise not fulfilled at print

// To make the function wair for the response before continuing

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base,increase);
    console.log (`Your new salary ${new_salary}`)
    return new_salary
}
async_increase_salary (50000, 5000)