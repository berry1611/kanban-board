import API from './apiUrl';

export const signup = (formData) => API.post('/signup', formData);
export const login = (formData) => API.post('/auth/login', formData);
