const { pass, failed } = require('./test-utilities')

function describe(name, callback) {
  console.log(name)
  callback()
}

function it(testName, testFunction) {
  try {
    testFunction()
    pass(testName)
  } catch (e) {
    failed(testName, e.message)
  }
}

function expect(actualValue) {
  return {
    toBe(expectedValue) {
      if (expectedValue !== actualValue) {
        throw new Error(
          `Expected ${expectedValue} but received ${actualValue}.`,
        )
      }
    },
  }
}

global.describe = describe
global.it = it
global.test = it
global.expect = expect
