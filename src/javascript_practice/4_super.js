//ES6 JS Classes
class User {
    constructor(username, password){
        this.name = username;
        this.password = password;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, '+ this.name);
    }
    //Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
    //Method 3
    passwordCheck() {
        console.log(`${this.name}, your current password is ${this.password}`)
    }
}

//super
class BronzeLevelUser extends User {
    //We add the ccinfo property to the user here.
    constructor(username, password, ccinfo) {
        //If you are going to use 'this' in your constructor, you
        //must have super that points to the parent constructor.
        super(username, password);
        //The 'this' keyword wouldn't work without super
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }
    getInfo(){
        console.log(this.username, this.password, this.type, this.ccinfo);
    }
}

let bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "424242424242424242")
bronzeGuy.greet();
bronzeGuy.status();
bronzeGuy.passwordCheck();
console.log(bronzeGuy);

//Instance of the class/new object
let anonDude = new User("Anonymous dude");

//we can nowuse the instance and the . operator
// to access the 2 methods
anonDude.greet();
anonDude.status();

//Another instance of the class
let anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();

//Another instance of the class
let jeff = new User("Jeff");
jeff.greet();
jeff.status();