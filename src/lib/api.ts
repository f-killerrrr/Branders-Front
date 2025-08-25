import axios from 'axios';

const baseURL = import.meta.env.DEV
  ? ''
  : import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '') || 'https://branders.kro.kr';

export const api = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});
