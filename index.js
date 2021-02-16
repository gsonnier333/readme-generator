// TODO: Include packages needed for this application
let fs = require("fs");
let inquirer = require("inquirer");
let gen = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "Enter your project's title:"
    },
    {
        name: "description",
        message: "Enter your project's description:"
    },
    {
        name: "install",
        message: "Enter installation instructions for your project:"
    },
    {
        name: "usage",
        message: "Enter usage information for your project:"
    },
    {
        name: "guidelines",
        message: "Enter your project's contribution guidelines:"
    },
    {
        name: "test",
        message: "Enter test instructions for your project:"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err){
            console.log(err);
            return err;
        }
        else{
            console.log("Success!");
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        let readmeText = gen.generateMarkdown(response);
        writeToFile("./generated/readme.md", readmeText);
    });
}

// Function call to initialize app
init();
