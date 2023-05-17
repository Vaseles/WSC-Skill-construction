import axios from 'axios'

const API_URL = 'http://127.0.0.1:8001/nvafmzc-m1.wsr.ru/api'

export const $axios = axios.create({
   baseURL: API_URL,
   headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('Quackity') ? `Bearer ${localStorage.getItem('Quackity')}` : ''
   }
})