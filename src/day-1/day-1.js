const fs = require('fs')
const path = require('path')

const readEntries = () =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'input'), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      resolve(
        data
          .trim()
          .split('\n')
          .map((entry) => Number.parseInt(entry, 10))
      )
    })
  })

const solutionPartOne = async () => {
  const sumTo = 2020
  const entries = await readEntries()

  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i]
    const j = entries.indexOf(sumTo - entry)
    if (j !== -1) {
      return entry * entries[j]
    }
  }

  throw new Error(
    `Could not find two numbers that sum to ${sumTo} in ${entries}`
  )
}

const solutionPartTwo = async () => {
  const sumTo = 2020
  const entries = await readEntries()

  entries.sort((a, b) => a - b)

  for (let i = 0; i < entries.length; i += 1) {
    let left = i + 1
    let right = entries.length - 1

    while (left < right) {
      const a = entries[i]
      const b = entries[left]
      const c = entries[right]
      const sum = a + b + c

      if (sum === sumTo) {
        return a * b * c
      }
      if (sum < sumTo) {
        left += 1
      } else {
        right -= 1
      }
    }
  }

  throw new Error(
    `Could not find two numbers that sum to ${sumTo} in ${entries}`
  )
}

module.exports = {
  solutionPartOne,
  solutionPartTwo,
}
