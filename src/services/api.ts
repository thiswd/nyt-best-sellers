import axios from "axios"

const API_KEY = "c5wYt3kekdMqgQtTS60OGor3OMIAFFG8"
const API_BASE_URL = "https://api.nytimes.com/svc/books/v3/lists/current"

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  params: {
    "api-key": API_KEY,
  },
})
