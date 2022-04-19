import axios from "axios"

export const api = axios.create({
  baseURL: "http://localhost:3003/api",
  headers: {
    sub:
      typeof window !== "undefined" // verifying if code is running in the browser
        ? localStorage.getItem("@recp:sub")
        : null,
  },
})
