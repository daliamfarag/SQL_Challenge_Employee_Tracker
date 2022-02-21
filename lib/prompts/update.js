module.exports = function (validateString) {
    return {
      role: roleData => {
        return [
          {
            type: "list",
            name: "role",
            message: "Which salary role you want to update?",
            choices: roleData.map(
              role =>
                `${role.department} | ${role.title} | current salary: $${role.salary}`
            ),
            pageSize: 5,
          },
          {
            type: "integer",
            name: "salary",
            message: "What is the new salary role you would like to add? (dollars only)",
            validate: salary => (salary <= 10000000000000 ? true : false),
          },
        ]
      },
      employee: (employeeData, managerData, roleData) => {
        return [
          {
            type: "list",
            name: "id",
            message: "Which employee's information you want to update?",
            choices: employeeData.map(employee => {
              return {
                value: employee.id,
                name: `${employee.id} ${employee.first_name} ${employee.last_name} | manager: ${employee.manager_name} role: ${employee.role}`,
              }
            }),
          },
          {
            type: "checkbox",
            name: "updateOptions",
            message:
              "What employee's information require to be updated?",
            choices: [
              { value: "f", name: "Change first name" },
              { value: "l", name: "Change last name" },
              { value: "m", name: "Change manager" },
              { value: "r", name: "Change role" },
              {
                value: "s",
                name: "Confirm this employee is a manager",
              },
            ],
          },
          {
            type: "input",
            name: "firstName",
            message: "What is the first name of employee?",
            validate: firstName => validateString(firstName),
            when: answers => answers.updateOptions.includes("f"),
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the last name of employee?",
            validate: lastName => validateString(lastName),
            when: answers => answers.updateOptions.includes("l"),
          },
          {
            type: "list",
            name: "managerId",
            message: "Please select a new manager for this employee.",
            choices: managerData.map(
              manager =>
                `${manager.id} ${manager.first_name} ${manager.last_name}`
            ),
            when: answers => answers.updateOptions.includes("m"),
          },
          {
            type: "list",
            name: "roleId",
            message: "Please select this employee's new role.",
            choices: roleData.map(
              role => `${role.id} ${role.title} | ${role.department}`
            ),
            when: answers => answers.updateOptions.includes("r"),
          },
          {
            type: "confirm",
            name: "isManager",
            message: "Confirm if this employee is a manager now",
            default: false,
            when: answers => answers.updateOptions.includes("s"),
          },
        ]
      },
    }
  }
  