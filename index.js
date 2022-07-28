// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "what",
        type: "input",
        message: "what is the app for?",
    },
    {
        name: "how",
        type: "input",
        message: "How do I use the app?",
    },
    {
        name: "install",
        type: "input",
        message: "how do I install it?",
    },
    {
        name: "issues",
        type: "input",
        message: "how do I report issues?",
    },
    {
        name: "contribution",
        type: "input",
        message: "how do I make contributions?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", fileName, (err) => err ? console.error(err): console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer)=>{
        console.log("saved")
    })
    const newFile = generateReadMe(question); 
}

// Function call to initialize app
init();
