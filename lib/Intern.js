const Employee = require('./Employee');

class Intern extends Employee {
    constructor(firstName, id, email, school) {

        super(firstName, id, email);
        this.school = school;

    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;