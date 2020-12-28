const fs = require('fs')
const path = require('path')

const solution = () =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'input'), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      const sumTo = 2020

      const entries = data
        .trim()
        .split('\n')
        .map((entry) => Number.parseInt(entry, 10))

      entries.forEach((entry) => {
        const i = entries.indexOf(sumTo - entry)
        if (i !== -1) {
          resolve(entry * entries[i])
        }
      })

      reject(
        new Error(
          `Could not find two numbers that sum to ${sumTo} in ${entries}`
        )
      )
    })
  })

module.exports = solution
