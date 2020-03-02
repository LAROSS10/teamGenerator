// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.


class Manager extends Employee {
    constructor(name, employeeId, emailAddress,school )
    { super(name, employeeId, emailAddress, officeNumber)
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager
