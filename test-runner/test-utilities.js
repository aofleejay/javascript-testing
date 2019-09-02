const chalk = require('chalk')

function pass(testName) {
  console.log(chalk.bgKeyword('green').bold(' PASS '), testName)
}

function failed(testName, message) {
  console.log(chalk.bgKeyword('red').bold(' FAILED '), testName)
  console.log(chalk.red(`  ${message}`))
}

module.exports = { pass, failed }
