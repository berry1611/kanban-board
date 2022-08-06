import * as api from 'api';
import { CREATE_TASK, GET_TASKS } from 'state/action-types';

export const getTasks = (todo_id) => async (dispatch) => {
  try {
    const { data } = await api.getTasks(todo_id);
    dispatch({ type: GET_TASKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createTask = (formData, todo_id) => async (dispatch) => {
  try {
    const { data } = await api.createTask(formData, todo_id);
    dispatch({ type: CREATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};
