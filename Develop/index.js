// required packages for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Questions to solicit user input
const questions = ["What is the name of your application?", "Please provide a brief description of your application.", "Please provide installation instructions for your application or confirm that no installations are needed.", "Please provide brief instructions for how to use your app.", "Please select the license for your application", "Tests", "Questions", "Please provide the GitHub username of the app author.", "Please provide the author's email address."];

// function to write the README file and implement the collected data
const makeREADME = ({appName, appDesc, appInstall, appUsage, appLicense, appTests, appQuestions, appAuthor, authorEmail}) => 
`
# ${appName}

## License

![License: ${appLicense}](https://img.shields.io/badge/License-${appLicense}-yellow.svg)

## Description

${appDesc}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation Instructions

${appInstall}

## Usage

${appUsage}

## Tests

${appTests}

## Questions

${appQuestions}

## App Author

${appAuthor} - [GitHub](https://github.com/${appAuthor})

## Author's Email

${authorEmail}

`;

// function that runs on app initialization to ask questions
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
            choices: ['GitHub', 'MIT']
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
        {
            // collects contributor/author's github username
            type: 'input',
            name: 'appAuthor',
            message: questions[7],
        },
        {
            // collects contributor/author's email
            type: 'input',
            name: 'authorEmail',
            message: questions[8],
        }
    ])
    .then((responses) => {

    // sets the data to be plugged into the README file
    const answersContent = makeREADME(responses);

    // writes the README file into the top level directory
    fs.writeFile('../README.md', answersContent, (err) =>
        err ? console.log(err) : console.log("Your README has been generated.")
        );
    });
}

// Function call to run on app initialization
init();
