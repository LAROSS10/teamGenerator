// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = requires("employee");
const Engineer = requires("engineer")

class Intern extends Employee {
    constructor(name, employeeId, emailAddress,school )
    { super(name, employeeId, emailAddress)
        this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
}

module.exports = Intern