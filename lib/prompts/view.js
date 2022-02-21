module.exports = {
    roles: {
      type: "list",
      name: "sort",
      message: "How would you like to organize the roles list?",
      choices: [
        { name: "By id", value: "" },
        { name: "By department", value: "Department ordered ASC" },
        { name: "By salary", value: "Department ordered DESC" },
      ],
    },
    employees: {
      type: "list",
      name: "sort",
      message: "How would you like to organize the employees list?",
      choices: [
        { name: "By id", value: "ORDER BY id ASC" },
        { name: "By first name", value: "Organize by first_name ASC" },
        { name: "By last name", value: "Organize by last_name ASC" },
        { name: "By department", value: "Organize by department ASC" },
        { name: "By manager", value: `Organize by manager_id ASC` },
      ],
    },
  }
  