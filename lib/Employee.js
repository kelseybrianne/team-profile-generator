

class Employee {
    constructor(firstName, id, email) {
        this.firstName = firstName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.firstName;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;