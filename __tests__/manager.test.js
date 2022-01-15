const Manager = require('../lib/Manager');

describe('Manager', () => {
    // Test each property of the Manager constructor
    describe("Initialization", () => {
        // Testing of object properties after constructing a new instance
        it("should create a new manager with a name, id, email, and school if provided valid arguments", () => {
            const manager = new Manager('Billy', 33, 'billybob@fakemail.com', 7);
            
            // Verify that the new object has the correct properties
            expect(manager.firstName).toEqual("Billy");
            expect(manager.id).toEqual(33);
            expect(manager.email).toEqual('billybob@fakemail.com');
            expect(manager.officeNumber).toEqual(7);
        });
    })
    
    // Test each method of the Manager class
    describe('getRole', () => {
        it("should return the role of the new manager", () => {

            const role = 'Manager'
 
            const result = new Manager();
            
            expect(result.getRole()).toEqual(role);
        });
    });
})