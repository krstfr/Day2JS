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

Counter()=> Counter() {
    this.age = 32;
    this.timer = setInterval(function add() {
      this.age++;
      console.log(this.age);
    }, 1000);
  }