export const getMonthKey = date => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
}

export const getMonthLabel = date =>
  new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(date)

export const getDaysInMonth = date => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

export const getLastSixMonths = () => {
  const months = []
  const current = new Date()
  for (let i = 5; i >= 0; i -= 1) {
    const date = new Date(current.getFullYear(), current.getMonth() - i, 1)
    months.push({
      key: getMonthKey(date),
      name: new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date),
    })
  }
  return months
}