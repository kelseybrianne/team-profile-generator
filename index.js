const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const employees = require('./utils/employees');
const Intern = require('./lib/Intern');
// const addEngineer = require('./utils/addEngineer');

// Actions needed below (all separate functions)

// Ask them for manager info

// Prompt the user for the data

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
        generateHTML();
    }
}

async function askForManagerInfo() {

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
    console.log(manager.getRole());
    console.log(employees);

    askForNextAction();

}
     // .catch((error) => {console.log(error)});


askForManagerInfo();

// Ask them for engineer info

    // Prompt the user for the data

        // THEN create and store an object for the Manager

        // THEN ask what they would like to do next

// Ask them for intern info

    // Prompt the user for the data

        // THEN create and store an object for the Manager

        // THEN ask what they would like to do next

// Ask what they would like to do next

    // Add Employee, Add Intern, or Be Done

        // IF 'Add Engineer' -> 'Ask them for engineer info'

        // IF 'Add Intern' -> 'Ask them for intern info'

        // IF 'Be done' -> 'Build an html page'

// Use all of the collected employee data to build an HTML paged

// module.exports = employees;