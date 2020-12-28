const { solutionPartOne, solutionPartTwo } = require('./day-1.js')

describe('Day 1', () => {
  describe('solutionPartOne', () => {
    test('Find the two entries that sum to 2020; what do you get if you multiply them together?', async () => {
      await expect(solutionPartOne()).resolves.toBe(494475)
    })
  })

  describe('solutionPartTwo', () => {
    test('what is the product of the three entries that sum to 2020?', async () => {
      await expect(solutionPartTwo()).resolves.toBe(267520550)
    })
  })
})
