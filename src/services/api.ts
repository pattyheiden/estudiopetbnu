import axios from 'axios'
export const api = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://api.estudiopetbnu.com.br',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
})