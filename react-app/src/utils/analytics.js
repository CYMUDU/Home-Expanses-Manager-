export const sumTotal = expenses =>
  expenses.reduce((total, exp) => total + Number(exp.amount || 0), 0)

export const sumByCategory = (expenses, categories) => {
  return categories.map(category => ({
    name: category,
    total: sumTotal(expenses.filter(exp => exp.category === category)),
  }))
}

export const sumByMonth = (expenses, months) => {
  return months.map(month => ({
    name: month.name,
    total: sumTotal(expenses.filter(exp => exp.date?.startsWith(month.key))),
  }))
}

export const formatCurrency = value => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number.isFinite(value) ? value : 0)
}