const fs = require('fs')
const path = require('path')

const countOccurrences = (str, value) => {
  const regExp = new RegExp(value, 'g')
  return (str.match(regExp) || []).length
}

const parse = (line) => {
  const [policyRange, letter, password] = line.split(' ')

  const [firstNumber, secondNumber] = policyRange.split('-')

  return {
    firstNumber: Number.parseInt(firstNumber, 10),
    secondNumber: Number.parseInt(secondNumber, 10),
    letter: letter[0],
    password,
  }
}

const validatePartOne = (line) => {
  const parsedLine = parse(line)

  const letterOccurrences = countOccurrences(
    parsedLine.password,
    parsedLine.letter
  )

  return (
    letterOccurrences >= parsedLine.firstNumber &&
    letterOccurrences <= parsedLine.secondNumber
  )
}

const validatePartTwo = (line) => {
  const parsedLine = parse(line)

  const hasFirstPosition =
    parsedLine.password[parsedLine.firstNumber - 1] === parsedLine.letter
  const hasSecondPosition =
    parsedLine.password[parsedLine.secondNumber - 1] === parsedLine.letter

  return hasFirstPosition !== hasSecondPosition
}

const readInputFile = () =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'input'), 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }

      resolve(data.trim().split('\n'))
    })
  })

const solutionPartOne = async () => {
  const lines = await readInputFile()
  return lines.filter((line) => validatePartOne(line)).length
}

const solutionPartTwo = async () => {
  const lines = await readInputFile()
  return lines.filter((line) => validatePartTwo(line)).length
}

module.exports = {
  solutionPartOne,
  solutionPartTwo,
}
