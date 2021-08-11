// ==, ===
console.log("1"==1)//checks the value ("1" = 1, True)
console.log("1"===1)//checks the type and value ("1" is 1, but the first is a string \
//and the other is an integer)


// Date Functions 
let day = new Date().getDay();
console.log(day) //2 because Tuesday is the second numeric day of the week

//0-7 = Sun-Mon

let literal_day = new Date().toString();
literal_day = literal_day.split("  ")
console.log(literal_day)

//Switch Case Statement
switch(day){
    case 0:
        console.log("Go to Church");

    case 1:
        console.log("Write Code")
        break;
    case 2:
        console.log("Test Code because it's Tuseday");
        break;
    case 3: 
        console.log("It's hump day");
        break;
    case 4: 
        console.log("It's almost Friday");
        break;
    case 5: 
        console.log("Go workout, then chill out. It's Friday");
        break;
    case 6:
        console.log("Find a plot, or plan one");
        break;
    default:
        console.log("Just vibe");
}

switch(literal_day){
    case 'Sun':
        console.log("Go to Church");

    case 'Mon':
        console.log("Write Code")
        break;
    case 'Tues':
        console.log("Test Code because it's Tuseday");
        break;
    case 'Wed': 
        console.log("It's hump day");
        break;
    case 'Thur': 
        console.log("It's almost Friday");
        break;
    case 'Fri': 
        console.log("Go workout, then chill out. It's Friday");
        break;
    case 'Sat':
        console.log("Find a plot, or plan one");
        break;
    default:
        console.log("Just vibe");
}

//Creating Objects in JS

//Simple Object 
let person = {
    name: 'Odell',
    age: 27,
    fav_color: 'Brown'
}
//dot notation
console.log(person.name)

//bracket notation
console.log(person['name'])

//more complex object
let person2 = {
    name: 'Max',
    age: 13,
    fav_sneakers: ['Nike', 'Jordan', 'Adidas', 'Rick Owens', 'Vans'],
    fav_color: 'Green',
    teams:[
        {
            baseball: 'Yankees',
            football: 'Patriots',
            basketball: 'Lakers',
            soccer: ['PSG', 'Manchester United']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: ['New York Knicks', 'Houston Rockets'],
            soccer: ['Arsenal, Juventus']
        }
    ]

}

console.log(person2.fav_sneakers[1]); //Jordan
console.log(person2.teams[1].baseball);//Toronto BlueJays

console.log(Object.keys(person2));// ['name', 'age', 'fav_sneakers', 'fav_color', 'teams' ]
console.log(Object.values(person2));

// loop through object
for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
    console.log(
        person2[Object.keys(person2)[i]]
    )
}

// "for in" loop = is not like the python "for in" (that is the JS for of)
for (let key in person2){
    console.log(key)
    console.log(person2[key]) //This is the same thing as line 117, just simple 
}

// List Values from the person2 object that are arrays
for (let key in person){
    if (Array.isArray(person2[key])){
        console.log(person2[key])
    }
}

