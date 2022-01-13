const Employee = require('./Employee');
const employees = require('../utils/employees');

class Engineer extends Employee {
    constructor(firstName, id, email, gitHub) {

        super(firstName, id, email);
        this.gitHub = gitHub;

    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;