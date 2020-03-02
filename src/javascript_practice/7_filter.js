const instructors = [
    { name: 'Quincy', specialty: 'Quantum Mechanics', medals: 7 },
    { name: 'Kenn', specialty: 'Norse Mythology', medals: 5 },
    { name: 'Paul', specialty: 'Tuvan throat singing', medals: 8 },
    { name: 'Aaron', specialty: 'Entomology', medals: 4 },
    { name: 'Carolyn', specialty: 'Kung Fu', medals: 3 },
]

let instructor_names = [];
for(let i = 0; i < instructors.length; i++) {
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names)

const instructorNames = instructors.filter(instructor => instructor.medals >= 5)
console.log(instructorNames)

//Fix this code:
//const instructorInfo = instructor.filter(instructor => instructors.name==='Aaron')

const instructorInfo = instructors.filter(instructor => instructor.name==='Aaron')
console.log(instructorInfo)