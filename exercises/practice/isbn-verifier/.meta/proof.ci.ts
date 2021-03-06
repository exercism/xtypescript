export function isValid(input: string): boolean {
  const isbn = input.replace(/-/g, '')
  if (!isbn.match(/^(\d{9}[\dxX])$/)) {
    return false
  }

  const digits = [...isbn]
  if (digits[9].match(/[xX]/)) {
    digits[9] = '10'
  }

  const sum = digits.reduce(
    (acc, value, index) => acc + (10 - index) * parseInt(value, 10),
    0
  )

  return sum % 11 === 0
}
