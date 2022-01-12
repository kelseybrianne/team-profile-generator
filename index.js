const inquirer = require('inquirer');
const Employee = require('./lib/employeeClass');
const Manager = require('./lib/managerClass');

const employees = [];

// Actions needed below (all separate functions)

// Ask them for manager info

// Prompt the user for the data
function promptManager() {
    inquirer  
    .prompt([
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
    // THEN create and store an object for the Manager (into the globally declared array)
    .then(answers => {
        
        const { firstName, id, email, officeNumber } = answers
        
        
        const manager = new Manager(firstName, id, email, officeNumber);
        employees.push(manager);
        console.log(manager.getRole());
        console.log(employees);
        
    })
    .catch((error) => {console.log(error)});
}

    // THEN ask what they would like to do next

promptManager();

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