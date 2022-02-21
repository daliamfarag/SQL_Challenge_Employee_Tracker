const inquirer = require("inquirer")
const prompts = require("../prompts")
const queries = require("../queries")

module.exports = function (select, execute) {
  return {
    role: async () => {
      const roles = await select(
        queries.view.roles({ sort: "Department ordered ASC" })
      )
      const answers = await inquirer.prompt(prompts.update().role(roles))
      const sql = queries.update.role(answers)
      const message = `The salary role has been successfully updated to ${answers.salary}.`
      return execute(sql, message)
    },

    employee: async () => {
      const employees = await select(queries.view.employees({ sort: "" }))
      const managers = await select(
        queries.view.employees({ sort: "WHERE e.is_manager = 1" })
      )
      const roles = await select(queries.view.roles({ sort: "" }))
      const answers = await inquirer.prompt(
        prompts.update().employee(employees, managers, roles)
      )
      answers.isManager = answers.isManager ? 1 : 0
      const targetEmployee = employees.filter(
        employee => employee.id === answers.id
      )[0]
      const sql = queries.update.employee(answers, targetEmployee)
      const message = `Employee's ${answers.id} information has been successfully updated.`
      return execute(sql, message)
    },
  }
}
