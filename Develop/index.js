// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./Utils/generateMarkdown');
const generateMarkdown = require('./Utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    //Title
    "What is the title of your project?",
    
    //Description
    "What description do you have for your project?",
    
    //Table of Contents
    "Do you need a table of contents?",
    
    //Installation 
    "What does a person need to do to install your project?",
    
    //Usage
    "How is your project used?",
    
    //License
    "What type of license does your project have?",

    //Contributing
    "Who deserves credit for this project?",

    //Tests
    "What steps are needed to test this software?",

    //Github
    "What is your Github user name?",
    "What is your Github profile URL?",

    //Contact
    "What is your contact email address?",
    "How do you want people to contact you with questions?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
            {
                type: "input",
                name: "Title",
                message: questions[0]
            },
            {
                type: "input",
                name: "Description",
                message: questions[1]
            },
            {
                type: "list",
                name: "Table_of_Contents",
                message: questions[2],
                choices: ["Yes", "No"]
            },
            {
                type: "input",
                name: "Installation",
                message: questions[3]
            },
            {
                type: "input",
                name: "Usage",
                message: questions[4]
            },
            {
                type: "list",
                name: "License",
                message: questions[5],                
                choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", 
                "BSD 2-Clause \"Simplified\" License", "BSD 3-Clause \"New\" or \"Revised\" License",
                "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0",
                "GNU Affero General Public v3.0", "GNU General Public v2.0", "GNU Lesser General Public v2.1",
                "Mozilla Public License 2.0", "The Unlicense", "No license"]
            },
            {
                type: "input",
                name: "Contributions",
                message: questions[6]
            },
            {
                type: "input",
                name: "Tests",
                message: questions[7]
            },
            {
                type: "input",
                name: "GitHubUsername",
                message: questions[8]
            },
            {
                type: "input",
                name: "GitHubProfileURL",
                message: questions[9]
            },
            {
                type: "input",
                name: "EmailAddress",
                message: questions[10]
            },
            {
                type: "input",
                name: "ContactInstructions",
                message: questions[11]
            }
        ])
        .then((data) => {
            console.log(data)
            const processedData = generateMarkdown(data)
            fs.writeFile(`${data.Title}_README.md`, processedData, (err) =>
            err ? console.error(err) : console.log("File created"))
        })
}

// Function call to initialize app
init();
