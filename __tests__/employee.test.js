const Employee = require('../lib/Employee');

describe('Employee'), () => {
    
    // Methods
    describe("Initialization", () => {

        // Testing of object properties after constructing a new instance
        it("should build with prop x when give y", () => {

        })
    })
    
    describe('getName', () => {
        
        it("should return the name of the new employee", () => {
            // Arrange
            // Create a new Employee object
            const name = "Kelsey";
            
            // Act
            // Call the getName method and store the result
            const result = new Employee(name, id, email).getName();
            
            // Assert
            // The result is equal to an expected value
            expect(result).toEqual(name);
        });
    });

    describe('getId', () => {
       
    });

    describe('getEmail', () => {
     
    });

    describe('getRole', () => {
   
    });
}