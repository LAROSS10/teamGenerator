// lines 2 and 3 are to pull in the required npm packages needed for this project

const inquirer = require("inquirer");
const fs = require("fs");
const  Engineer = require("./Engineer")
// let info.name = "Lori Ross";
// let info.emailAddress ="laross70@gmail.com"
// let info.employeeId = "123456"
// let info.workphone = "440-282-7893"
// lines 7-36 are the prompts to get the user input, these have been tested with a console log
inquirer.prompt([
    { 
        type: "input",
        name: "name",
        message: "Please provide your full name"
        },
    { 
        type: "input",
        name: "emailAddress",
        message: "Please provide your Email Address"
        },
    { 
        type: "input",
        name: "employeeId",
        message: "Please provide your employee Id"
        },
    { 
        type: "input",
        name: "workPhone",
        message: "Please provide your phone number"
                }
            ]).then(function(info){
                let name = info.name;
                let emailAddress = info.emailAddress;
                let employeeId = info.employeeId;
                let workPhone = info.workPhone;

                console.log(name);
                fs.appendFile("./engineer.html", name, function(err){
                   if(err) {
                       console.log("this did not work")
                    }else {
                        console.log("check your file")
                    }
                })
            })
       


