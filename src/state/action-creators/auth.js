import * as api from 'api';
import { LOGIN, SIGNUP } from 'state/action-types';

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: SIGNUP, payload: data });
    navigate('/v1');
  } catch (error) {
    console.log(error);
  }
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    dispatch({ type: LOGIN, payload: data });
    navigate('/v1');
  } catch (error) {
    console.log(error);
  }
};
