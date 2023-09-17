import axios from "axios"

const API_BASE_URL = "https://api.nytimes.com/svc/books/v3/lists/current"

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    "api-key": import.meta.env.VITE_NYT_BOOKS_API_KEY,
  },
})
