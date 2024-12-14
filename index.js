// Write your solution in this file!
// Step 1: Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Step 2: Define the required functions
  
  // 1. updateEmployeeWithKeyAndValue
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  // 3. deleteFromEmployeeByKey
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Export the functions and employee object if needed for testing
  module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
  };
  