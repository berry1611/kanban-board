import { storageKey } from 'constant/storageKey';
import API from './apiUrl';

API.interceptors.request.use((req) => {
  if (localStorage.getItem(storageKey.USER_INFO)) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem(storageKey.USER_INFO)).auth_token}`;
  }
  return req;
});

export const getTodos = () => API.get('/todos');
export const createTodo = (formData) => API.post('/todos', formData);
