const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");


test("testing to get name of the Engineer", () => {
    const testing = new Engineer("Jess", 222, "jess@gmail.com", "JessicaJeyanthiran")
    expect(testing.getName()).toBe("Jess")
});

test("testing to get Id of the Engineer", () => {
    const testing = new Engineer("Jess", 222, "jess@gmail.com", "JessicaJeyanthiran")
    expect(testing.getId()).toBe(222)
});

test("testing to get email of the Manager", () => {
    const testing = new Engineer("Jess", 222, "jess@gmail.com", "JessicaJeyanthiran")
    expect(testing.getEmail()).toBe("jess@gmail.com")
});

test("testing to get Github username", () => {
    const testing = new Engineer("Jess", 222, "jess@gmail.com", "JessicaJeyanthiran")
    expect(testing.getGithub()).toBe("JessicaJeyanthiran")
});

test("testing to get role of the staff member", () => {
    const testing = new Engineer("Jess", 222, "jess@gmail.com", "JessicaJeyanthiran")
    expect(testing.getRole()).toBe("Engineer")
});

