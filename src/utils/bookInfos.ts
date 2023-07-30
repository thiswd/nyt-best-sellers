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

export function bookFontSize(title: string): string {
  const lettersCount = title.length

  switch (true) {
    case lettersCount <= 8:
      return "2.8rem"
    case lettersCount <= 10:
      return "2.6rem"
    case lettersCount <= 12:
      return "2.4rem"
    case lettersCount <= 14:
      return "2.3rem"
    case lettersCount <= 16:
      return "2rem"
    case lettersCount <= 18:
      return "1.8rem"
    case lettersCount <= 20:
      return "1.6rem"
    default:
      return "1.4rem"
  }
}

export function splitTitle(title: string): string[] {
  const words = title.split(" ")
  const mid = ~~(words.length / 2)
  const firstLine = words.slice(0, mid).join(" ")
  const secondLine = words.slice(mid).join(" ")
  return [firstLine, secondLine]
}
