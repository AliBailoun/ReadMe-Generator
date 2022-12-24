// TODO: Include packages needed for this application
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid answer.")
                } return true;

            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give your project a brief description',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid answer.")
                } return true;

            }
        },
        {
            type: 'input',
            name: 'table',
            message: 'What content does your application showcase?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid answer.")
                } return true;

            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Instructions for installation?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid answer.")
                } return true;

            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would one use this application?',
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter a valid answer.")
                } return true;

            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license:',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'No license']
        },
        {
            type: 'input',
            name: 'question',
            message: 'Do you have any question to the person who made this interface?',
            validate: function (answer) {
                if (answer == "yes") {
                    console.log(", please email me at aliforps05@gmail.com")
                } else if  (answer == "no") {
                    console.log(", Great!")
                } return true;

            }
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data,err => {
    if (err) {
        return console.log(err);
    }
    console.log("Great job, your README file has been created!!")
    }
)};

 writeToFile();
 
 const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();