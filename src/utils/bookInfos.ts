export const MAX_CHARS_PER_LINE = 22

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

export function bookFontSize(title: string, author: string): string {
  const { length } = title
  const lettersCount = length + addExtraSpace(length, author)

  switch (true) {
    case lettersCount <= 8:
      return "3.2rem"
    case lettersCount <= 10:
      return "3rem"
    case lettersCount <= 12:
      return "2.8rem"
    case lettersCount <= 14:
      return "2.6rem"
    case lettersCount <= 16:
      return "2.4rem"
    case lettersCount <= 18:
      return "2.3rem"
    case lettersCount <= 20:
      return "2rem"
    default:
      return "1.8rem"
  }
}

function addExtraSpace(lettersAmount: number, author: string): number {
  if (lettersAmount < 16) return 0
  const wordsCount = author.split(" ").length
  const extraSpace = Math.ceil(wordsCount / 2)
  return extraSpace
}

export function splitTitle(title: string): string[] {
  const words = title.split(" ")

  let part1 = ""
  let part2 = ""
  let part1Length = 0
  let part2Length = title.length

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const newLength = part1Length + word.length + (part1.length > 0 ? 1 : 0)

    if (newLength <= part2Length) {
      part1 += (part1.length > 0 ? " " : "") + word
      part1Length += word.length + (part1.length > 0 ? 1 : 0)
      part2Length -= word.length + (i > 0 ? 1 : 0)
    } else {
      part2 = words.slice(i).join(" ")
      break
    }
  }

  return [part1, part2]
}
