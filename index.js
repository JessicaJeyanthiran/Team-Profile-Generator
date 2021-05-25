// Packages needed for this application
const inquirer = require ("inquirer");
const fs = require ("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generatePage = require('./src/page-template');
const writeHTML = require('./src/generate-site');

const team = [];

const promptUser = () => {
   return inquirer.prompt([{
        type: "input",
        name: "name",
        message:"Enter Employee Name:",
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log("Enter an employee name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'ID',
        message: "Enter the employee's ID number",
        validate: ID => {
          if (ID) {
            return true;
          } else {
            console.log("Please enter your employee's ID number!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email address:",
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log("Please enter the employee's email address!");
            return false;
          }
        }
      },
      {
        type: "list",
        name: "role",
        message: "What is their role in the company?",
        choices: ["Manager", "Engineer", "Intern"]
    }
    ])
  
  // Questions Per Role

  .then(input => {
    if (input.role === "Manager") {
        inquirer.prompt([{
            type: "input",
            name: "office",
            message: "What is your office mumber?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log("Enter an Office Number for the manager.");
                    return false;
                }
            }
        }])
        .then(teamMemeber => {

            const initialManager = new Manager(input.name, input.email, input.eid, input.role, teamMemeber.office);
            
            team.push(initialManager);
            addOtherMembers();
        });
    } else if (input.role === "Engineer") {
        inquirer.prompt([{
            type: "input",
            name: "gitHub",
            message: "Enter the engineer's github username:",
            validate: gitHubLink => {
                if (gitHubLink) {
                    return true;
                } else {
                    console.log("Enter the GitHub username!");
                    return false;
                }
            }
        }])
        .then(teamMemeber => {
            const softwareEngineer = new Engineer(input.name, input.email, input.eid, input.role, teamMemeber.gitHub);
            team.push(softwareEngineer);
            addOtherMembers();
        });
    } else if(input.role === "Intern") {
        inquirer.prompt ([{
            type: "input",
            name: "school",
            message: "What school did this intern go to?",
            validate: education => {
                if (education) {
                    return true;
                } else {
                    console.log("Enter the school the intern went to!");
                    return false;
                }
            }
        }])
        .then(teamMemeber => {
            const learner = new Intern(input.name, input.email, input.eid, input.role, teamMemeber.school);
            team.push(learner);
            addOtherMembers();
        });
    }

    function addOtherMembers () {
        inquirer.prompt([{
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another Team Member?",
        }])
        .then (res => {
            if (res.newEmployee === true) {
                promptUser(team);
            } else {
                let cardsHTML = generatePage(team);
                
            return writeHTML(cardsHTML);
                
            }
        })
    }
})

};

promptUser();
