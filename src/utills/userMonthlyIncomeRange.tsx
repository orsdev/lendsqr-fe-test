export const userMonthlyIncomeRange = (income: string[]) => {
  if (income === null || income === undefined)
    return {
      min: 0,
      max: 0
    }

  const convertIncomeToInterger = income.map((item) => Number(item))

  const minimumIncome = Math.min(...convertIncomeToInterger)
  const maxIncome = Math.max(...convertIncomeToInterger)

  return {
    min: minimumIncome,
    max: maxIncome
  }
}
