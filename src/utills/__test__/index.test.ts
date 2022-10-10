import { concatString } from 'utills/concatString'
import { userMonthlyIncomeRange } from 'utills/userMonthlyIncomeRange'

describe('Concat String utils function', () => {
  test('Returns empty string when argument is not passed', () => {
    expect(concatString()).toBe('')
  })

  test('Returns concated string when argument is passed', () => {
    const arg1 = 'Adedeji'
    const arg2 = 'Olowe'

    expect(concatString(arg1, arg2)).toBe('Adedeji Olowe')
  })
})

describe('userMonthlyIncomeRange utils function', () => {
  test('Returns {min: 0, max: 0} when argument is empty', () => {
    expect(userMonthlyIncomeRange([])).toEqual({
      min: 0,
      max: 0
    })
  })

  test('Returns expected result when argument(string[]) is passed', () => {
    expect(userMonthlyIncomeRange(['400', '200'])).toEqual({
      min: 200,
      max: 400
    })
  })
})
