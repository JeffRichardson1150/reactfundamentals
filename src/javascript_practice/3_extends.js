class User {
    constructor(name){
        this.name = name;
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
}

//Extends
class TrialUser extends User {
    trialEnding() {  // trialEnding method
        console.log('Your trial will be ending soon, ' + this.name + '. Would you like to join our program?');
    }
}

//Extend User to BannedUser
class BannedUser extends User {
    bannedReason() {
        console.log(`Sorry ${this.name}, You are banned because you were rude to Ferd Derbish`)
    }
    status() {
        console.log('Current status: Banned');
    }
}

//Instance of User class
let anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
let trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// Instance of BannedUser class
let bannedUser = new BannedUser("Standish");
bannedUser.greet()
bannedUser.bannedReason();
bannedUser.status();
