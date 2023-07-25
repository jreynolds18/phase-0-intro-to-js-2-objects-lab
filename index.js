const employee = {
    name: "Unnamed",
    streetAddress: "No Address",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee}
    newEmployee.name = "Sam"
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee.name;
    return employee;
};