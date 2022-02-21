module.exports = {
    department: departmentData => {
      return [
        {
          type: "list",
          name: "department",
          message: "Which department you want to delete?",
          choices: departmentData.map(
            department => `${department.id} ${department.name}`
          ),
        },
        {
          type: "confirm",
          name: "confirmDelete",
          message:
            "Are you sure you want to delete this department? NOTE: ALL RELATED EMPLOYEES AND ROLES WILL BE DELETED.",
          default: false,
        },
      ]
    },
    role: roleData => {
      return [
        {
          type: "list",
          name: "role",
          message: "Which role you want to delete?",
          choices: roleData.map(role => `${role.id} ${role.title}`),
        },
        {
          type: "confirm",
          name: "confirmDelete",
          message:
            "Are you sure you want to delete this role? NOTE: ALL RELATED EMPLOYEES WILL BE DELETED.",
          default: false,
        },
      ]
    },
    employee: employeeData => {
      return [
        {
          type: "list",
          name: "employee",
          message: "Which employee you want to delete?",
          choices: employeeData.map(
            employee =>
              `${employee.id} ${employee.first_name} ${employee.last_name}`
          ),
        },
        {
          type: "confirm",
          name: "confirmDelete",
          message:
            "Are you sure you want to delete this employee? NOTE: YOU CANNOT UNDO.",
          default: false,
        },
      ]
    },
  }
  