// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
inquirer
    .prompt([
        {
            name: "title",
            type: "input",
            message: "what is the title of your application?",
        },
        {
            name: "description",
            type: "input",
            message: "Can you describe your application?",
        },
        {
            name: "descriptionTwo",
            type: "input",
            message: "Why did you create it?",
        },
        {
            name: "installation",
            type: "input",
            message: "what are the steps required to install your project? (provide step-by-step instructions)",
        },
        {
            name: "usage",
            type: "input",
            message: "AS A... I WANT... SO THAT I...",
        },
        {
            name: "usageTwo",
            type: "list",
            message: "Can you add images or screenshots once file is generated?",
            choices: [ "Need to add image", "No image"]
        },
        {
            name: "contribution",
            type: "input",
            message: "what are your guidelines for other developers to contribute to your application?",
        },
        {
            name: "test",
            type: "input",
            message: "How do you run your tests",
        },
        {
            name: "github",
            type: "input",
            message: "what is your github link?",
        },
        {
            name: "email",
            type: "input",
            message: "what is your E-mail address?",
        },
        {
            name: "license",
            type: "list",
            message: "Select a type of license:",
            choices: [ "MIT", "GNU", "Mozilla", "None"]
        },
    ])
    .then((response) => {
        console.log(response);

        const readme = generateMarkdown(response)
        // TODO: Create a function to write README file
        fs.writeFile("README.md", readme, (err) => err ? console.error(err) : console.log("success"))
    })


