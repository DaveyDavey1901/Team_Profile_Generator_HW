// the following will allow us to test using Jest to ensure everything is working how it should be.

const Employee = require("../lib/Employee");
const employee = new Employee(
  "David",
  "555666",
  "testt@mail.com"
);

test("test to get constructor values for the employee object", () => {
  expect(employee.name).toBe("David");
  expect(employee.id).toBe("555666");
  expect(employee.email).toBe("testt@mail.com");
});

test("test to get the name from the getName() method", () => {
  expect(employee.getName()).toBe("David");
});

test("test to get the id from the getId() method", () => {
  expect(employee.getId()).toBe("555666");
});

test("test to get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("testt@mail.com");
});

test("test to get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("Employee");
});
