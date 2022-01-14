const Employee = require('../lib/Employee');

describe('Employee', () => {
    // Methods
    describe("Initialization", () => {
        // Testing of object properties after constructing a new instance
        it("should create an Employee with a name, id, and email if provided valid arguments", () => {
            const employee = new Employee('Sarah', 3, 'sarahbett@gmail.com');
      
            // Verify that the new object has the correct properties
            expect(employee.firstName).toEqual("Sarah");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual('sarahbett@gmail.com');
          });
    })
    
    describe('getName', () => {

        it("should return the name of the new employee", () => {
            const firstName = "Kelsey";
 
            const result = new Employee(firstName);
            
            expect(result.getName()).toEqual(firstName);
        });
    });

    describe('getId', () => {
        it("should return the id of the new employee", () => {

            const name = 'Kelsey';
            const id = '183'
 
            const result = new Employee(name, id);
            
            expect(result.getId()).toEqual(id);
        });
    });

    describe('getEmail', () => {
        it("should return the email of the new employee", () => {
            const name = 'Kelsey';
            const id = '183';
            const email = 'kb@fakemail.com';
   
            const result = new Employee(name, id, email);
            
            expect(result.getEmail()).toEqual(email);
        });
    });

    describe('getRole', () => {
        it("should return the role of the new employee", () => {
            const role = "Employee";
    
            const result = new Employee();
        
            expect(result.getRole()).toEqual(role);
        });
    });
})