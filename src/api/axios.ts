import axios from 'axios'

// For testing Purposes -  Add endpoint to environment variable
const BASE_ENDPOINT =
  'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1'

const api = axios.create({
  baseURL: BASE_ENDPOINT,
  timeout: 30000, // 30 seconds
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
