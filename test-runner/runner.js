const { pass, failed } = require('./test-utilities')

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

global.it = it
global.expect = expect
