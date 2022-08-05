import { storageKey } from 'constant/storageKey';
import { ADD_GROUP_TASK_MODAL, CREATE_TODO, GET_TODOS, LOGIN, LOGOUT, SIGNUP } from 'state/action-types';

const initialState = {
  groupTasks: [],
  authToken: null,
  modal: {
    addGroupTask: false,
  },
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
    case ADD_GROUP_TASK_MODAL:
      return { ...state, modal: { ...state.modal, addGroupTask: !state.modal.addGroupTask } };
    case GET_TODOS:
      return { ...state, groupTasks: action.payload };
    case CREATE_TODO:
      return { ...state, groupTasks: [...state.groupTasks, action.payload] };
    default:
      return state;
  }
};

export default reducer;
