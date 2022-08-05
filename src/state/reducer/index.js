import { storageKey } from 'constant/storageKey';
import { GET_TODOS, LOGIN, LOGOUT, SIGNUP } from 'state/action-types';

const initialState = {
  groupTasks: [],
  authToken: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
    case SIGNUP:
      localStorage.setItem(storageKey.USER_INFO, JSON.stringify({ ...action?.payload }));
      return { ...state, authToken: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authToken: null };
    case GET_TODOS:
      return { ...state, groupTasks: action.payload };
    default:
      return state;
  }
};

export default reducer;
