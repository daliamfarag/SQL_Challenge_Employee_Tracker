module.exports = function (validateString) {
    return {
      department: {
        type: "input",
        name: "name",
        message: "Please enter the department name.",
        validate: name => validateString(name),
      },
      role: function (departmentData) {
        return [
          {
            type: "input",
            name: "title",
            message: "Please enter the role title.",
            validate: title => validateString(title),
          },
          {
            type: "integer",
            name: "salary",
            message: "What is the role salary? (dollars only)",
            validate: salary => (salary <= 10000000000000 ? true : false),
          },
          {
            type: "list",
            name: "department",
            message: "Which department this role relates to?",
            choices: departmentData.map(
              department => `${department.id} ${department.name}`
            ),
          },
        ]
      },
      employee: (roleData, managerData) => {
        return [
          {
            type: "input",
            name: "firstName",
            message: "What is the first name of this employee?",
            validate: firstName => validateString(firstName),
          },
          {
            type: "input",
            name: "lastName",
            message: "What is the last name of this employee?",
            validate: lastName => validateString(lastName),
          },
          {
            type: "confirm",
            name: "isManager",
            message: "Is this employee a manager?",
            default: false,
          },
          {
            type: "confirm",
            name: "hasManager",
            message: "Does this employee have a manager?",
            default: false,
          },
          {
            type: "list",
            name: "manager",
            message: "Who is this employee's manager?",
            choices: managerData.map(
              manager =>
                `${manager.id} ${manager.first_name} ${manager.last_name}`
            ),
            when: answers => answers.hasManager !== false,
            pageSize: 5,
          },
          {
            type: "list",
            name: "roleId",
            message: "What is the role of this employee?",
            choices: roleData.map(role => `${role.id} ${role.title}`),
          },
        ]
      },
    }
  }
  