import * as api from 'api';
import { CREATE_TODO, GET_TODOS, START_LOADING, END_LOADING, SET_ERROR, RESET_ERROR } from 'state/actionTypes';

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.getTodos();
    dispatch({ type: GET_TODOS, payload: data });

    dispatch({ type: RESET_ERROR });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });

    dispatch({ type: END_LOADING });
  }
};

export const createTodo = (formData) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });

    const { data } = await api.createTodo(formData);
    dispatch({ type: CREATE_TODO, payload: data });

    dispatch({ type: RESET_ERROR });
    dispatch({ type: END_LOADING });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });

    dispatch({ type: END_LOADING });
  }
};
