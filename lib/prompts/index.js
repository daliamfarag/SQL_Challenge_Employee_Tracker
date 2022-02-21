const view = require("./view")
const add = require("./add")
const update = require("./update")
const del = require("./delete")

const validateString = string =>
  string.match(/^[a-zA-Z\ ]+$/)
    ? true
    : "This field only has letters and spaces."

const prompts = {
  view: view,
  add: () => add(validateString),
  update: () => update(validateString),
  delete: del,
}

module.exports = prompts
