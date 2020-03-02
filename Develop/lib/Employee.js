// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");
const fs = require("fs");

class Employee {
  
    
    constructor(name, employeeId, emailAddress, workPhone) {
        this.name = name;
        this.employeeId = employeeId;
        this.emailAddress = emailAddress;
        

    }

    getName (){
        return this.name
    }

    getId () {
        return this.Id
    }

    getEmail (){
        return this.emailAddress
    }
    getRole (){
        return "Employee"
    }
}
module.exports = Employee
