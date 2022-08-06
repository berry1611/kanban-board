import { storageKey } from 'constant/storageKey';
import { OPEN_GROUP_TASK_MODAL, OPEN_CREATE_TASK_MODAL, CLOSE_ALL_MODAL, CREATE_TASK, CREATE_TODO, GET_TASKS, GET_TODOS, LOGIN, LOGOUT, SIGNUP } from 'state/action-types';

const initialState = {
  groupTasks: [],
  authToken: null,
  tasks: [],
  modal: {
    addGroupTask: false,
    addNewTask: false,
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
    case OPEN_GROUP_TASK_MODAL:
      return { ...state, modal: { ...state.modal, addGroupTask: true } };
    case OPEN_CREATE_TASK_MODAL:
      return { ...state, modal: { ...state.modal, addNewTask: true } };
    case CLOSE_ALL_MODAL:
      return { ...state, modal: { addGroupTask: false, addNewTask: false } };
    case GET_TODOS:
      return { ...state, groupTasks: action.payload };
    case GET_TASKS:
      return { ...state, tasks: [...state.tasks, ...action.payload] };
    case CREATE_TODO:
      return { ...state, groupTasks: [...state.groupTasks, action.payload] };
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
};

export default reducer;
