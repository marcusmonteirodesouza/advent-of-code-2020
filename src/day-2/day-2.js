const fs = require('fs')
const path = require('path')

const countOccurrences = (str, value) => {
  const regExp = new RegExp(value, 'g')
  return (str.match(regExp) || []).length
}

class PasswordValidator {
  static parse(line) {
    const [policyRange, letter, password] = line.split(' ')

    const [lowNumberOfTimes, highNumberOfTimes] = policyRange.split('-')

    return {
      lowNumberOfTimes: Number.parseInt(lowNumberOfTimes, 10),
      highNumberOfTimes: Number.parseInt(highNumberOfTimes, 10),
      letter: letter[0],
      password,
    }
  }

  static validate(line) {
    const parsedLine = PasswordValidator.parse(line)

    const letterOccurrences = countOccurrences(
      parsedLine.password,
      parsedLine.letter
    )

    return (
      letterOccurrences >= parsedLine.lowNumberOfTimes &&
      letterOccurrences <= parsedLine.highNumberOfTimes
    )
  }
}

const solutionPartOne = () =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'input'), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      const lines = data.trim().split('\n')

      resolve(lines.filter((line) => PasswordValidator.validate(line)).length)
    })
  })

module.exports = {
  solutionPartOne,
}
