// Packages needed to run the application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const employees = require('./utils/employees');

let teamName;

async function addEngineer() {
    // Try and catch methods used instead of .prompt/.then and .catch for Inquirer
    try {
        const answers = await inquirer.prompt([
            {
                name: 'firstName',
                message: "What is the engineer's name?",
                type: 'input'
            },
            {
                name: 'id',
                message: "What is the engineer's employee id?",
                type: 'input'
            },
            {
                name: 'email',
                message: "What is the engineer's email address?",
                type: 'input'
            },
            {
                name: 'gitHub',
                message: "What is the team engineer's GitHub username?",
                type: 'input'
            }
        ])
        
        // Destructuring the object so that answers.firstName = firstName and so on
        const { firstName, id, email, gitHub } = answers
            
        const engineer = new Engineer(firstName, id, email, gitHub);
        employees.push(engineer);
        console.log(employees);
    
        askForNextAction();
    }

    catch(error) {
        console.log(error);
    }
}

async function addIntern() {
    try {
        const answers = await inquirer.prompt([
            {
                name: 'firstName',
                message: "What is the intern's name?",
                type: 'input'
            },
            {
                name: 'id',
                message: "What is the intern's employee id?",
                type: 'input'
            },
            {
                name: 'email',
                message: "What is the intern's email address?",
                type: 'input'
            },
            {
                name: 'officeNumber',
                message: "What school is the intern attending?",
                type: 'input'
            }
        ])
    
        const { firstName, id, email, officeNumber } = answers
            
        const intern = new Intern(firstName, id, email, officeNumber);
        employees.push(intern);
        console.log(employees);
    
        askForNextAction();
    }

    catch(error) {
        console.log(error);
    }
}

async function askForNextAction() {
    try {
        const answers = await inquirer.prompt([
            {
                name: 'next',
                message: "Who would you like to add next?",
                type: 'list',
                choices: ['Add an engineer', 'Add an intern', 'Finish building my team'] 
            }
        ])
    
        const { next } = answers;
        console.log(next);
        if(next === 'Add an engineer') {
            addEngineer();
        } else if (next === 'Add an intern') {
            addIntern();
        } else if (next === 'Finish building my team') {
            fs.writeFile(
                './dist/index.html',
                generateHtml(employees, teamName),
                (err) => 
                err ? console.error(err) : console.log('----------Team Profile Generated----------')
            )
        }
    }

    catch(error) {
        console.log(error);
    }
}

async function addManager() {
    try {
        const answers = await inquirer.prompt([
            {
                name: 'firstName',
                message: "What is the team manager's name?",
                type: 'input'
            },
            {
                name: 'id',
                message: "What is the team manager's employee id?",
                type: 'input'
            },
            {
                name: 'email',
                message: "What is the team manager's email address?",
                type: 'input'
            },
            {
                name: 'officeNumber',
                message: "What is the team manager's office number?",
                type: 'input'
            }
        ])
    
        const { firstName, id, email, officeNumber } = answers
        const manager = new Manager(firstName, id, email, officeNumber);
        employees.push(manager);
    
        askForNextAction();
    }
    
    catch(error) {
        console.log(error);
    }
}

async function createTeam() {
    try {
        const answers = await inquirer.prompt([
            {
                name: 'teamName',
                message: "What would you like to name your team?",
                type: 'input'
            }
        ])
    
        teamName = answers.teamName;
        addManager();
    }

    catch(error) {
        console.log(error);
    }
}

createTeam();