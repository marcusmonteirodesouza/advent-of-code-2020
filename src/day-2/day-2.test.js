const { solutionPartOne } = require('./day-2')

describe('Day 2', () => {
  describe('solutionPartOne', () => {
    test('How many passwords are valid according to their policies?', async () => {
      await expect(solutionPartOne()).resolves.toBe(546)
    })
  })
})
