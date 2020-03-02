// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = requires("employee");

class Engineer extends Employee {
    constructor(name, employeeId, emailAddress,github )
    { super(name, employeeId, emailAddress)
        this. github = github
    }

    getRole() {
        return "Engineer"
    }

    getGitHub() {
        return this.github"
    }
}

module.exports = Engineer
