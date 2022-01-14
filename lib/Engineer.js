const Employee = require('./Employee');

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