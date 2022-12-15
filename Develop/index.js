// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ['What is the name of your application?', 'Please provide a brief description of your application.', 'Please provide installation instructions for your application.', 'Please provide a brief description of how your application is used.'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'appName',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'appDesc',
            message: questions[1],
        },
    ])
    .then((responses) => {
    console.log(responses);
    });
}

// Function call to initialize app
init();
