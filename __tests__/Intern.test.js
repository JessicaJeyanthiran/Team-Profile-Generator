const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");


test("testing to get name of the Intern", () => {
    const testing = new Intern("Jeya", 555, "jeya@gmail.com", "UofT")
    expect(testing.getName()).toBe("Jeya")
});

test("testing to get Id of the Engineer", () => {
    const testing = new Intern("Jeya", 555, "jeya@gmail.com", "UofT")
    expect(testing.getId()).toBe(555)
});

test("testing to get email of the Manager", () => {
    const testing = new Intern("Jeya", 555, "jeya@gmail.com", "UofT")
    expect(testing.getEmail()).toBe("jeya@gmail.com")
});

test("testing to get name of intern's school", () => {
    const testing = new Intern("Jeya", 555, "jeya@gmail.com", "UofT")
    expect(testing.getSchool()).toBe("UofT")
});

test("testing to get role of the staff member", () => {
    const testing = new Intern("Jess", 222, "jess@gmail.com", "JessicaJeyanthiran")
    expect(testing.getRole()).toBe("Intern")
});
