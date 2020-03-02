const username = 'Kenn';
console.log(`${username} is the true JS Wizard!`);

//Template literal - breaks things into more than one line. It's handy with HTML
console.log(`Hey students,
What bugs can
${username}
fix
for you today`);

//Interpolation with an object in React
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
}

console.log(`${person.username}, ${person.profession}`, 'extraordinaire');