const { solutionPartOne, solutionPartTwo } = require('./day-2')

describe('Day 2', () => {
  describe('solutionPartOne', () => {
    test('How many passwords are valid according to their policies?', async () => {
      await expect(solutionPartOne()).resolves.toBe(546)
    })
  })

  describe('solutionPartTwo', () => {
    test('How many passwords are valid according to the new interpretation of the policies?', async () => {
      await expect(solutionPartTwo()).resolves.toBe(275)
    })
  })
})
