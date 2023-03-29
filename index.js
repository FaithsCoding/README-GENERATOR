// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message:
      "To begin generating your README file please provide your project name: ",
    name: "title",
    validate: (projectInput) => {
      if (projectInput) {
        return true;
      } else {
        console.log("Please enter your project name!");
        return false;
      }
    },
  },
  {
    type: "list",
    message: "blasdasdsad",
    name: "license",
    choices: ["a", "b", "c", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created README.md!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
