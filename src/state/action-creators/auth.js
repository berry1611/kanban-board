import * as api from 'api';
import { LOGIN, SIGNUP, RESET_ERROR, SET_ERROR } from 'state/action-types';

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: SIGNUP, payload: data });
    navigate('/v1');

    dispatch({ type: RESET_ERROR });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });
  }
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, payload: data });
    navigate('/v1');

    dispatch({ type: RESET_ERROR });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response.data.message });
  }
};
