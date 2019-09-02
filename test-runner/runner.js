function it(testName, testFunction) {
  try {
    testFunction()
    console.log(`✔ ${testName}`)
  } catch (e) {
    console.log(`✘ ${testName}`)
    console.log(`  ${e.message}`)
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
