const Engineer = require("../lib/Engineer");
const engineer = new Engineer(
  "David",
  "555666",
  "testt@mail.com",
  "Davey1901"
);

test("test to get constructor values for the engineer object", () => {
  expect(engineer.name).toBe("David");
  expect(engineer.id).toBe("555666");
  expect(engineer.email).toBe("testt@mail.com");
  expect(engineer.githubUsername).toBe("Davey1901");
});

test("test to get the github username from the getGithub() method", () => {
  expect(engineer.getGithub()).toBe("Davey1901");
});

test("test to get the role from the getRole() method", () => {
  expect(engineer.getRole()).toBe("Engineer");
});
