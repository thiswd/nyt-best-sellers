export function formatDate(dateString: string): string {
  if (!dateString) return ""

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Date(dateString).toLocaleDateString("en-US", options)
}
