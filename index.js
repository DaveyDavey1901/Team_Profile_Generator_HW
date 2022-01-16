// Node Modules also installed
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Team child classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array to push to
const teamArray = []

const userBuildMenu = async () => {
  const userJobChoice = await inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select a job role from the following list",
        choices: [
          "add a manager",
          "add an engineer",
          "add an intern",
          "finish team build",
        ],
      },
    ]);
  switch (userJobChoice.menu) {
    case "add a manager":
      newManager();
      break;
    case "add a engineer":
      newEngineer();
      break;
    case "add a intern":
      newIntern();
      break;
    default:
      buildTeam();
  }
};

userBuildMenu();