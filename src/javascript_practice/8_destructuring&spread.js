// // What we want to do is grab specific values from that starting array and assign those values to new variables.  
// //Let's see how we can do that without destructing below:
// const array = ['thing', 42, false, {key: 'value'}, [1,2,3,4,undefined], NaN];
// let stringVar = array[0];
// let numVar = array[1];
// let objVar = array[3];
// let nanVar = array[array.length - 1]
// console.log("referencing array cells vs destructuring")
// console.log(stringVar, numVar, objVar, nanVar);

// //use destructuring
// let [string, num,, obj,, nan] = array;
// console.log("select fields with array destructuring")
// console.log(string, num, obj, nan)

// //spread operator
// let newArr = ['a', 1, undefined, ...array];
// console.log(newArr);


//Another example object
const testObj = {
    string: 'stringy thingy',
    num: 23, 
    bool: true,
    obj: {key: 'waluigi'},
    arr: [1,2,3,4, undefined],
    nan: NaN
}
//assign individual object components to individual variables
const stringVar = testObj.string;
const numVar = testObj.num;
const objVar = testObj.obj;
const nanVar = testObj.nan;
console.log(stringVar, numVar, objVar, nanVar);

//alternatively, use destructuring
let {string, obj, num, nan} = testObj;
console.log(string, num, obj, nan);

//let's see how we can insert all the properties in our 'testObj' object into a new object 
//without any difficult labor on our part
let newObj = {test: "blah", newThang: 'other thing', ...testObj};
console.log(newObj);