// Node Modules also installed
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const createHTML = require("./src/teamTemplate.js");
// Team child classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array to push to
const teamArray = [];

const userTeamBuildMenu = async () => {
  const userJobChoice = await inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select which option you would like to continue with:",
        choices: [
          "add manager",
          "add engineer",
          "add intern",
          "finish building my team",
        ],
      },
    ]);
  switch (userJobChoice.menu) {
    case "add manager":
      newManager();
      break;
    case "add engineer":
      newEngineer();
      break;
    case "add intern":
      newIntern();
      break;
    default:
      createTeam();
  }
};

//questions for manager
const newManager = async () => {
  const userInput = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (nameInput_1) => {
          if (nameInput_1) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter your employee ID",
        validate: (employeeId_1) => {
          if (employeeId_1) {
            return true;
          } else {
            console.log("Please enter your employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "please enter your email address",
        validate: (email_1) => {
          if (email_1) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: " please enter your office number",
        validate: (officeNumber_1) => {
          if (officeNumber_1) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ]);
  console.log(userInput);
  const manager = new Manager(
    userInput.name,
    userInput.employeeId,
    userInput.email,
    userInput.officeNumber
  );
  teamArray.push(manager);
  userTeamBuildMenu();
};

// questions for an engineer
const newEngineer = async () => {
  const userInput = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the engineer?",
        validate: (engineerName_1) => {
          if (engineerName_1) {
            return true;
          } else {
            console.log("Please enter the name of the engineer!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Please enter engineer employee ID ",
        validate: (employeeId_1) => {
          if (employeeId_1) {
            return true;
          } else {
            console.log("Please enter engineer employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter contact email address",
        validate: (email_1) => {
          if (email_1) {
            return true;
          } else {
            console.log("Please enter contact email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "Please Enter your Github username.",
        validate: (githubUsername_1) => {
          if (githubUsername_1) {
            return true;
          } else {
            console.log("Please enter your Github username!");
            return false;
          }
        },
      },
    ]);
  console.log(userInput);
  const engineer = new Engineer(
    userInput.name,
    userInput.employeeId,
    userInput.email,
    userInput.githubUsername
  );
  teamArray.push(engineer);
  userTeamBuildMenu();
};

//new intern questions
const newIntern = async () => {
  const userInput = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the intern?",
        validate: (internName_1) => {
          if (internName_1) {
            return true;
          } else {
            console.log("Please enter the name of the intern!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "Enter your Intern employee ID ",
        validate: (employeeId_1) => {
          if (employeeId_1) {
            return true;
          } else {
            console.log("Please enter Intern employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address please",
        validate: (email_1) => {
          if (email_1) {
            return true;
          } else {
            console.log("Please enter email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter your school name.",
        validate: (school_1) => {
          if (school_1) {
            return true;
          } else {
            console.log("Please enter your school name!");
            return false;
          }
        },
      },
    ]);
  console.log(userInput);
  const intern = new Intern(
    userInput.name,
    userInput.employeeId,
    userInput.email,
    userInput.school
  );
  teamArray.push(intern);
  userTeamBuildMenu();
};

//create a html file from the data inputed and combined with the createHTML file
function createTeam() {
  const createContent = createHTML(teamArray);
    fs.writeFile("./output/index.html", createContent, (err) =>
    err
      ? console.log(err)
      : console.log("Your Team has been successfully created")
  );
} 

userTeamBuildMenu();
