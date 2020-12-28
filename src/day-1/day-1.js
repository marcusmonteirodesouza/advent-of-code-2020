const fs = require('fs')
const path = require('path')

const solution = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'input'), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
  
      const sumTo = 2020

      const entries = data.trim().split('\n').map(entry => Number.parseInt(entry))

      for (const a of entries) {
        const i = entries.indexOf(sumTo - a) 
        if (i !== -1) {
          resolve(a * entries[i])
        }
      }

      reject(`Could not find two numbers that sum to ${sumTo} in ${entries}`)
    })
  })
}

module.exports = solution
