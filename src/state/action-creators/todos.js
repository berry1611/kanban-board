import * as api from 'api';
import { GET_TODOS } from 'state/action-types';

export const getTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getTodos();
    dispatch({ type: GET_TODOS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
