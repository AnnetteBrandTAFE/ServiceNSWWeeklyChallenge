const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...

    console.log();
    console.log("Welcome to Pieces of code's, Classic Movie Experience");
    console.log();
    console.log ("The movies showing tonight are : "); 
    console.log("Star Trek II: The Wrath of Khan ");
    console.log("The Enforcer staring CLINT EASTWOOD, The third movie in the Dirty Harry Series");
    console.log();
    let userInput1 = await askQuestion ("Due to these movies rating please enter your age:   ")
    let custAge = parseInt(userInput1);
    if (custAge < 15) {
        console.log();
        console.log("I am sorry as both these movies are MA15+ I am unable to sell you tickets to tonights screening.")
        console.log();
        console.log("Please try again next week when we will have different movies screening"); 
    } else {
        console.log();
        console.log("Fantastic you are over the age of 15");
        console.log();
        console.log("The movies we are screening tonight are: ");
        console.log("[1] Star Trek II : The Wrath of Khan");
        console.log("[2] The Enforcer starting Clint Eastwood");
        console.log("[3] Exit");
        console.log();
        let ans = await askQuestion("Enter a number to select a movie from the list above or 3 to exit: ");
    if (ans == "1") {
        console.log();
        console.log("You have selected Star Trek II : The Wrath of Khan");
        let userInput2 = await askQuestion("How many tickets would you like ");
        let noOfTickets = parseInt(userInput2);
        console.log(`You have selected to purchase ${noOfTickets} tickets to Star Trek II : The Wrath of Khan. Your total for your tickets is $ ${noOfTickets * 15}`);
        console.log();
    } else if (ans == "2") {
        console.log();
        console.log("You have selected The Enforcer starting Clint Eastwood");
        let userInput2 = await askQuestion("How many tickets would you like ");
        let noOfTickets = parseInt(userInput2);
        console.log(`You have selected to purchase ${noOfTickets} tickets to The Enforcer staring CLINT EASTWOOD. Your total for your tickets is $ ${noOfTickets * 15}`);
        console.log();
    } else if (ans == "3") {
        console.log("Thank you supporting our Classic Movie Night we hope you have a fantastic experience");
    }
else {
    console.log("Sorry, I didn't understand that. Please enter a number from 1 - 4");
}
    }
let drinks = []
console.log();
console.log("We are currently trying to improve our beverage range.");
console.log();
let UserInput3 = await askQuestion("Please enter your favourite soft drink: ");
drinks.push(UserInput3);
console.log();
console.log("You have entered " + drinks + " Thank you for your help in inproving our beverage options");

}



Program().then(() => {
    process.exit(0);
});

