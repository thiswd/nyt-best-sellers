export function ordinalNumber(rank: number): string {
  const suffixes = ["st", "nd", "rd", "th"]
  const index = rank - 1
  return suffixes[index] || suffixes[suffixes.length - 1]
}

export function weeksOnTheListLabel(weeksAmount: number): string {
  if (weeksAmount === 0) return ""
  if (weeksAmount === 1) return "New this week"
  return `${weeksAmount} weeks on the list`
}

export function bookAltAttr(title: string, contributor: string) {
  return `Cover of the book '${title}', ${contributor}`
}
