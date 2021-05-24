const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("testing to get name of the Employee", () => {
    const testing = new Employee("Jessica", 545, "jess@gmail.com")
    expect(testing.getName()).toBe("Jessica")
});

test("testing to get Id of the Employee", () => {
    const testing = new Employee("Jessica", 545, "jess@gmail.com")
    expect(testing.getId()).toBe(545)
});

test("testing to get email of the Employee", () => {
    const testing = new Employee("Jessica", 545, "jess@gmail.com")
    expect(testing.getEmail()).toBe("jess@gmail.com")
});

test("testing to get role of the Employee", () => {
    const testing = new Employee("Jessica", 545, "jess@gmail.com")
    expect(testing.getRole()).toBe("employee")
});


