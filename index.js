const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
const employees = require('./utils/employees');

async function addEngineer() {
    const answers = await inquirer.prompt([
        {
            name: 'firstName',
            message: "What is the engineer's name?",
            type: 'input'
        }
    ])

    const { firstName } = answers
        
    const engineer = new Engineer(firstName);
    employees.push(engineer);
    console.log(employees);

    askForNextAction();
}

async function addIntern() {
    const answers = await inquirer.prompt([
        {
            name: 'firstName',
            message: "What is the intern's name?",
            type: 'input'
        }
    ])

    const { firstName } = answers
        
    const intern = new Intern(firstName);
    employees.push(intern);
    console.log(employees);

    askForNextAction();
}

async function askForNextAction() {
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
            generateHtml(employees),
            (err) => 
            err ? console.error(err) : console.log('----------Team Profile Generated----------')
        )
    }
}

async function addManager() {
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
     // .catch((error) => {console.log(error)});

addManager();