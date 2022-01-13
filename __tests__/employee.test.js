const Employee = require('../lib/Employee');

describe('Employee'), () => {
    
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
    
    // describe('getName', () => {
        
    //     it("should return the name of the new employee", () => {
    //         // Arrange
    //         // Create a new Employee object
    //         const name = "Kelsey";
            
    //         // Act
    //         // Call the getName method and store the result
    //         const result = new Employee(name, id, email).getName();
            
    //         // Assert
    //         // The result is equal to an expected value
    //         expect(result).toEqual(name);
    //     });
    // });

    // describe('getId', () => {
       
    // });

    // describe('getEmail', () => {
     
    // });

    // describe('getRole', () => {
   
    // });
}