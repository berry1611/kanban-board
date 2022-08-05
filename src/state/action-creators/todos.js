import * as api from 'api';
import { CREATE_TODO, GET_TODOS } from 'state/action-types';

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getTodos();
    dispatch({ type: GET_TODOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (formData) => async (dispatch) => {
  try {
    const { data } = await api.createTodo(formData);
    dispatch({ type: CREATE_TODO, payload: data });
  } catch (error) {
    console.log(error);
  }
};
