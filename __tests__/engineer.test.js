const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    // Test each property of the Engineer constructor
    describe("Initialization", () => {
        // Testing of object properties after constructing a new instance
        it("should create an Engineer with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer('Billy', 33, 'billybob@fakemail.com', 'billybob');
            
            // Verify that the new object has the correct properties
            expect(engineer.firstName).toEqual("Billy");
            expect(engineer.id).toEqual(33);
            expect(engineer.email).toEqual('billybob@fakemail.com');
            expect(engineer.gitHub).toEqual('billybob');
        });
    })

    // Test each method of the Engineer class
    describe('getGithub', () => {
        it("should return the github username of the new engineer", () => {
            const github = "billybob";
 
            const result = new Engineer('Billy', 33, 'billybob@fakemail.com', github);
            
            expect(result.getGithub()).toEqual(github);
        });
    });

    describe('getRole', () => {
        it("should return the id of the new engineer", () => {

            const role = 'Engineer'
 
            const result = new Engineer();
            
            expect(result.getRole()).toEqual(role);
        });
    });
})