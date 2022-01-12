const Engineer = require('../lib/engineerClass');
const inquirer = require('inquirer');
const employees = require('../index');

// Ask them for engineer info
const addEngineer = () => {
    inquirer  
    .prompt([
        {
            name: 'firstName',
            message: "What is the engineer's name?",
            type: 'input'
        }
    ])
    .then (answers => {

        const { firstName } = answers

        const engineer = new Engineer(firstName);
        employees.push(engineer);
        console.log(employees);
    })
}

    // Prompt the user for the data

        // THEN create and store an object for the Manager

        // THEN ask what they would like to do next

module.exports = addEngineer;