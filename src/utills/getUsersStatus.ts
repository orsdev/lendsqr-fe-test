type IUsersReturnProp = 'active' | 'pending' | 'blacklisted' | 'inactive' | ''

/**
 * The function takes in an array of strings and a string, and returns a string
 * @param {string[]} income - an array of strings representing the user's income over the past 2 years
 * @param {string} loan - string
 * @returns A function that takes two parameters and returns a string.
 */
export const getUserStatus = (
  income: string[],
  loan: string
): IUsersReturnProp => {
  if (income === undefined || loan === undefined) return ''

  const totalIncome = income.reduce((a: any, b: string) => {
    const convertAToNumber = parseFloat(a)
    const convertBToNumber = parseFloat(b)

    return convertAToNumber + convertBToNumber
  }, 0)

  const averageSalary = totalIncome / 2

  /* Checking if the loan repayment is less than or equal to 20% of the average salary. */
  if (parseFloat(loan) <= averageSalary * 0.2) {
    return 'active'
  } /* Checking if the loan repayment is greater than 20% of the average salary but less than or equal
  to 35% of the average salary. */ else if (
    parseFloat(loan) > averageSalary * 0.2 &&
    parseFloat(loan) <= averageSalary * 0.35
  ) {
    return 'pending'
  } /* Checking if the loan repayment is greater than 35% of the average salary but less than or equal
  to 50% of the average salary. */ else if (
    parseFloat(loan) > averageSalary * 0.35 &&
    parseFloat(loan) <= averageSalary * 0.5
  ) {
    return 'inactive'
  } /* Returning the string "blacklisted" if the loan repayment is greater than 50% of the average
  salary. */ else {
    return 'blacklisted'
  }
}
