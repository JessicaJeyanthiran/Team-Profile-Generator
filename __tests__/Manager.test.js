const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("testing to get name of the Manager", () => {
    const testing = new Manager("JJ", 645, "jj@gmail.com", 722)
    expect(testing.getName()).toBe("JJ")
});

test("testing to get Id of the Manager", () => {
    const testing = new Manager("JJ", 645, "jj@gmail.com", 722)
    expect(testing.getId()).toBe(645)
});

test("testing to get email of the Manager", () => {
    const testing = new Manager("JJ", 645, "jj@gmail.com", 722)
    expect(testing.getEmail()).toBe("jj@gmail.com")
});

test("testing to get office number", () => {
    const testing = new Manager("JJ", 645, "jj@gmail.com", 722)
    expect(testing.getOfficeNumber()).toBe(722)
});

test("testing to get role of the staff member", () => {
    const testing = new Manager("JJ", 645, "jj@gmail.com", 722)
    expect(testing.getRole()).toBe("Manager")
});

