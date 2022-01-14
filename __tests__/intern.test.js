const Intern = require('../lib/Intern');

describe('Intern', () => {
    // Methods
    describe("Initialization", () => {
        // Testing of object properties after constructing a new instance
        it("should create an Intern with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern('Billy', 33, 'billybob@fakemail.com', 'UW');
      
            // Verify that the new object has the correct properties
            expect(intern.firstName).toEqual("Billy");
            expect(intern.id).toEqual(33);
            expect(intern.email).toEqual('billybob@fakemail.com');
            expect(intern.school).toEqual('UW');
          });
    })
    
    describe('getSchool', () => {

        it("should return the school that the new intern attends", () => {
            const school = "UW";
 
            const result = new Intern('Billy', 33, 'billybob@fakemail.com', school);
            
            expect(result.getSchool()).toEqual(school);
        });
    });

    describe('getRole', () => {
        it("should return the id of the new intern", () => {

            const role = 'Intern'
 
            const result = new Intern('Billy', 33, 'billybob@fakemail.com', role);
            
            expect(result.getRole()).toEqual(role);
        });
    });
})