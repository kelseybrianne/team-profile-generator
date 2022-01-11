const employees = [];

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

// Actions needed below (all separate functions)

// Ask them for manager info

    // Prompt the user for the data

        // THEN create and store an object for the Manager (into the globally declared array)

        // THEN ask what they would like to do next

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