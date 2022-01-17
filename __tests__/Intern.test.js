const Intern = require("../lib/Intern");
const intern = new Intern(
  "David",
  "555666",
  "testt@mail.com",
  "Risedale"
);

test("test to get constructor values for the intern object", () => {
  expect(intern.name).toBe("David");
  expect(intern.id).toBe("555666");
  expect(intern.email).toBe("testt@mail.com");
  expect(intern.school).toBe("Risedale");
});

test("test to get the school name from the getSchool() method", () => {
  expect(intern.getSchool()).toBe("Risedale");
});

test("test to get the role from the getRole() method", () => {
  expect(intern.getRole()).toBe("Intern");
});
