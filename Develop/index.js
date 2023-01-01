// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// global variable(s)

var licenseBadge = '';

// Questions to solicit user input
const questions = ['What is the name of your application?', 'Please provide a brief description of your application.', 'Please provide installation instructions for your application or confirm that no installations are needed.', 'Please provide a brief description of how your application is used.', 'Please select the license for your application', 'Tests?', 'Questions?'];

// function to write the README file and implement the collected data
const makeREADME = ({appName, appDesc, appInstall, appUsage, appLicense, appTests, appQuestions}) =>
`
ehehehe my readme is here
`
;

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            // collects the name of the app
            type: 'input',
            name: 'appName',
            message: questions[0],
        },
        {
            // collects the description of the app
            type: 'input',
            name: 'appDesc',
            message: questions[1],
        },
        {
            // collects installation instructions for the app
            type: 'input',
            name: 'appInstall',
            message: questions[2],
        },
        {
            // collects a description of how the app is used/what it is used for
            type: 'input',
            name: 'appUsage',
            message: questions[3],
        },
        {
            // collects applicable licenses for the app
            type: 'list',
            name: 'appLicense',
            message: questions[4],
            choices: ['GitHub', 'Eclipse Marketplace', 'AUR license']
        },
        {
            // collects tests for the app if applicable
            type: 'input',
            name: 'appTests',
            message: questions[5],
        },
        {
            // collects question examples for the app if applicable
            type: 'input',
            name: 'appQuestions',
            message: questions[6],
        },
    ])
    .then((responses) => {
    console.log(responses);
    console.log(`the app's license is ${responses.appLicense}.`);
    licenseBadge = responses.appLicense;
    console.log(`-----------`);
    

    // sets the data to be plugged into the README file
    const answersContent = makeREADME(responses);

    // writes the README file
    fs.writeFile('README.md', answersContent, (err) =>
        err ? console.log(err) : console.log("Your README has been generated.")
        );

    scopeTester();
    });
    
}

// Function call to initialize app
init();

// scope testing function

function scopeTester() {
    console.log('Below me is the licenseBadge test!')
    console.log(licenseBadge);
}