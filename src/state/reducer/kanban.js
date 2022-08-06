import { storageKey } from 'constant/storageKey';
import { CREATE_TASK, CREATE_TODO, GET_TASKS, GET_TODOS, LOGIN, LOGOUT, SIGNUP, UPDATE_TASK, DELETE_TASK, START_LOADING, END_LOADING, SET_ERROR, RESET_ERROR } from 'state/action-types';

const initialState = {
  groupTasks: [],
  authToken: null,
  tasks: [],
  isLoading: false,
  errorMessage: null,
};

const kanbanReducer = (state = initialState, action) => {
  switch (action.type) {
    // Authentication
    case LOGIN:
    case SIGNUP:
      localStorage.setItem(storageKey.USER_INFO, JSON.stringify({ ...action?.payload }));
      return { ...state, authToken: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authToken: null };

    // Main
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
    case DELETE_TASK:
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload.task_id) };
    case SET_ERROR:
      return { ...state, errorMessage: action.payload };
    case RESET_ERROR:
      return { ...state, errorMessage: null };

    // Loading
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default kanbanReducer;
