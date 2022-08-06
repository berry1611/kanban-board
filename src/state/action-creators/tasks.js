import * as api from 'api';
import { CREATE_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from 'state/action-types';

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

export const updateTask = (formData, todo_id, task_id) => async (dispatch) => {
  try {
    const { data } = await api.updateTask({ ...formData, target_todo_id: todo_id }, todo_id, task_id);
    dispatch({ type: UPDATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = (todo_id, task_id) => async (dispatch) => {
  try {
    const { data } = await api.deleteTask(todo_id, task_id);
    dispatch({ type: DELETE_TASK, payload: { task_id } });
  } catch (error) {
    console.log(error);
  }
};
