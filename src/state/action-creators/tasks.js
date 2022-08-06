import * as api from 'api';
import { CREATE_TASK, DELETE_TASK, END_LOADING, GET_TASKS, START_LOADING, UPDATE_TASK, SET_ERROR, RESET_ERROR } from 'state/action-types';

export const getTasks = (todo_id) => async (dispatch) => {
  try {
    const { data } = await api.getTasks(todo_id);
    dispatch({ type: GET_TASKS, payload: data });

    dispatch({ type: RESET_ERROR });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });
  }
};

export const createTask = (formData, todo_id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createTask(formData, todo_id);
    dispatch({ type: CREATE_TASK, payload: data });

    dispatch({ type: RESET_ERROR });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });

    dispatch({ type: END_LOADING });
  }
};

export const updateTask = (formData, todo_id, task_id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.updateTask(formData, todo_id, task_id);
    dispatch({ type: UPDATE_TASK, payload: data });

    dispatch({ type: RESET_ERROR });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });

    dispatch({ type: END_LOADING });
  }
};

export const deleteTask = (todo_id, task_id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.deleteTask(todo_id, task_id);
    dispatch({ type: DELETE_TASK, payload: { task_id } });

    dispatch({ type: RESET_ERROR });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });

    dispatch({ type: END_LOADING });
  }
};
