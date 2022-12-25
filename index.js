// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
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
        name: 'tests',
        message: 'Please state how your application can be tested',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid answer.")
            } return true;

        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like to contribute to this project?',
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
        choices: ['MIT License', 'BSD License', 'GPL License', 'Apache License', 'None']
    },
    {
        type: 'input',
        name: 'question',
        message: 'Do you have any question to the person who made this interface? (yes/no)',
        validate: function (answer) {
            let input = answer.toLowerCase();
            if (input == "yes") {
                console.log(", please email me at alibailoun1982@gmail.com")
                return true;
            } else if (input == "no") {
                console.log(", Great!")
                return true;
            } else {
                console.log(", Please delete your previous answer and choose between yes or no")
            } return false;

        }, 

    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid answer.")
            } return true;

        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid answer.")
            } return true;

        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}


// TODO: Create a function to initialize app
async function initialize() {
    try {

        // const userResponses = await inquirer.prompt(questions);
        // console.log("Your responses: ", userResponses);
        // console.log("Thank you for your responses! Fetching your GitHub data next...");

        // console.log("Generating your README next...")
        // const markdown = generateMarkdown(userResponses);
        // console.log(markdown);

        await writeToFile('testREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

initialize();