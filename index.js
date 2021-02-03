const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown')

// array of questions for user
const questions = [{
        type: 'input',
        message: "What's the title of this project?",
        name:'Title'  
   
    }, {
        type: "input",
        message: "Describe this project. What is it about?",
        name: "Description"
    }, {
        type: "input",
        message: "Table of contents.",
        name: "Table of contents"
    }, {
        type: "input",
        message: "What does the user need to install to run this app?",
        name: "Installation"
    }, {
        type:"input",
        message: "How is the app used?",
        name: "Usage"
    }, {
        type: "input",
        message: "Who contributed to this project?",
        name: "Contributing"
    }, {
        type: "input",
        message: "What license is being used? (gpl-3.0)",
        name: "License"
    }, {
        type: "input",
        message: "What commands are needed to test this application?",
        name: "Tests"
    }, {
        type: "input",
        message: "Contact information.",
        name: "Questions"
    }, {
        type: "input",
        message: "What is your email?",
        name: "Email"
    }, {
        type: "input",
        message: " What is your Github username?",
        name: "Username"
    }

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("Success!")
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })

}

// function call to initialize program
init();
