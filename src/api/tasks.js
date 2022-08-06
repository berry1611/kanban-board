import { storageKey } from 'constant/storageKey';
import API from './apiUrl';

API.interceptors.request.use((req) => {
  if (localStorage.getItem(storageKey.USER_INFO)) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem(storageKey.USER_INFO)).auth_token}`;
  }
  return req;
});

export const getTasks = (todo_id) => API.get(`/todos/${todo_id}/items`);
export const createTask = (formData, todo_id) => API.post(`/todos/${todo_id}/items`, formData);
export const updateTask = (formData, todo_id, task_id) => API.patch(`/todos/${todo_id}/items/${task_id}`, formData);
export const deleteTask = (todo_id, task_id) => API.delete(`/todos/${todo_id}/items/${task_id}`);
