const solution = require('./day-1.js')

describe('Day 1', () => {
  describe('solution', () => {
    test('Find the two entries that sum to 2020; what do you get if you multiply them together?', async () => {
      await expect(solution()).resolves.toBe(494475)
    })
  })
})
