const Manager = require("../lib/Manager");
const manager = new Manager(
  "David",
  "555666",
  "testt@mail.com",
  "1901"
);

test("test to get constructor values for the manager object", () => {
  expect(manager.name).toBe("David");
  expect(manager.id).toBe("555666");
  expect(manager.email).toBe("testt@mail.com");
  expect(manager.officeNumber).toBe("1901");
});

test("test to get the office number from the getOfficeNumber() method", () => {
  expect(manager.getOfficeNumber()).toBe("1901");
});

test("test to get the role from the getRole() method", () => {
  expect(manager.getRole()).toBe("Manager");
});
