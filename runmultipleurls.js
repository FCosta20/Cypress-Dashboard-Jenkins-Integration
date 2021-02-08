const cypress = require('cypress')

const baseUrlList = 'https://google.com'

function runTests(){
    return cypress.run({
        config: {
            baseUrl: baseUrlList
        }
    })
}

runTests()