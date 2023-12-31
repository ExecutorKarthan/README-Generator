// Create a map for license data and an array for license choices
const licenseMap = new Map();
licenseMap.set("No license", "")
const licenseChoices = ["No license"];

// Create a fetch to retrieve up to date data on what licenses are available on Github, then add them to a map and list for reference
fetch("https://api.github.com/licenses")
.then(function (response){
    return response.json()
    })
.then(function(response){
    response.forEach(element => {
        licenseMap.set(element.name, element.key);
        licenseChoices.push(element.name);
        });
    })

// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Utils/generateMarkdown');

// Create an array of questions for user input
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

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File created"))
}

// Create a function to initialize app
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
                choices: licenseChoices,
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
            // Process the entered data into a Markdown format
            const processedData = generateMarkdown(data, licenseMap);
            const fileName = `${data.Title}.md`;

            //Save the file with a title and the processed data
            writeToFile(fileName, processedData);
        })
}

// Function call to initialize app
init();
