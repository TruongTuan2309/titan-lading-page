import axios from 'axios'
const { ENV_API_BASE_URL } = import.meta.env

const httpRequest = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  baseURL: ENV_API_BASE_URL
})

export default httpRequest
