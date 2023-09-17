import { AxiosError, isAxiosError } from "axios"

const RATE_LIMIT_ERROR_MESSAGE =
  "You've exceeded the API rate limit. Please try again later."
const GENERIC_ERROR_MESSAGE = "An error occurred while fetching books."

export function handleApiError(error: unknown): never {
  const err = error as AxiosError

  if (isAxiosError(err) && err.response?.status === 429) {
    throw new Error(RATE_LIMIT_ERROR_MESSAGE)
  } else {
    throw new Error(GENERIC_ERROR_MESSAGE)
  }
}
