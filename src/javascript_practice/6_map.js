const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics'},
    {name: 'Kenn', specialty: 'Norse Mythology'},
    {name: 'Paul', specialty: 'Tuvan throat singing'},
    {name: 'Aaron', specialty: 'Entomology'},
    {name: 'Carolyn', specialty: 'Kung Fu'},
]

let instructor_names = [];

for (let i=0; i < instructors.length; i++) {
    instructor_names.push(instructors[i].name);
}
console.log("Using a for loop")
console.log(instructor_names);

//The parameter (in this case 'instructor' can be named anything)
const instructorNames = instructors.map(instructor => instructor.name);
console.log("Using .map")
console.log(instructorNames)

//???? Fix the code ???
const instructorInfo = `${instructor.map(instructor => ${instructor.name}: ${instructors.specialty}`)}`;


// ****** Study this to understand how it changes the objects into correctly formatted key:value pairs
//an array of awkward objects, with keys and values separated
let kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];
console.log(kvArray);

//a correctly formatted {key: value} style object for each object in the original array
let reformattedArry = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})
console.log(reformattedArry);
