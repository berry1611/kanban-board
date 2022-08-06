import { storageKey } from 'constant/storageKey';
import {
  OPEN_GROUP_TASK_MODAL,
  OPEN_CREATE_TASK_MODAL,
  CLOSE_ALL_MODAL,
  CREATE_TASK,
  CREATE_TODO,
  GET_TASKS,
  GET_TODOS,
  LOGIN,
  LOGOUT,
  SIGNUP,
  OPEN_MORE_MODAL,
  UPDATE_TASK,
  OPEN_EDIT_TASK_MODAL,
  CLOSE_MORE_MODAL,
} from 'state/action-types';

const initialState = {
  groupTasks: [],
  authToken: null,
  tasks: [],
  modal: {
    addGroupTask: false,
    addNewTask: false,
    editTask: false,
    moreModal: false,
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
    case OPEN_EDIT_TASK_MODAL:
      return { ...state, modal: { ...state.modal, editTask: true } };
    case OPEN_MORE_MODAL:
      return { ...state, modal: { ...state.modal, moreModal: true } };
    case CLOSE_MORE_MODAL:
      return { ...state, modal: { ...state.modal, moreModal: false } };
    case CLOSE_ALL_MODAL:
      return { ...state, modal: { addGroupTask: false, addNewTask: false, moreModal: false, editTask: false } };
    case GET_TODOS:
      return { ...state, groupTasks: action.payload };
    case GET_TASKS:
      return { ...state, tasks: [...state.tasks, ...action.payload] };
    case CREATE_TODO:
      return { ...state, groupTasks: [...state.groupTasks, action.payload] };
    case CREATE_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case UPDATE_TASK:
      return { ...state, tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)) };
    default:
      return state;
  }
};

export default reducer;
