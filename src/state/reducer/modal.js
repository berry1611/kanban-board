import {
  OPEN_GROUP_TASK_MODAL,
  OPEN_CREATE_TASK_MODAL,
  CLOSE_ALL_MODAL,
  OPEN_MORE_MODAL,
  OPEN_EDIT_TASK_MODAL,
  CLOSE_MORE_MODAL,
  OPEN_REMOVE_TASK_MODAL,
  SET_TODO_ID,
  SET_TASK_ID,
  RESET_TASK_ID,
} from 'state/actionTypes';

const initialState = {
  addGroupTask: false,
  addNewTask: false,
  editTask: false,
  removeTask: false,
  moreModal: false,
  todoId: null,
  taskId: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    // Modal Toggle
    case OPEN_GROUP_TASK_MODAL:
      return { ...state, addGroupTask: true };
    case OPEN_CREATE_TASK_MODAL:
      return { ...state, addNewTask: true };
    case OPEN_EDIT_TASK_MODAL:
      return { ...state, editTask: true };
    case OPEN_REMOVE_TASK_MODAL:
      return { ...state, removeTask: true };
    case OPEN_MORE_MODAL:
      return { ...state, moreModal: true };
    case CLOSE_MORE_MODAL:
      return { ...state, moreModal: false };
    case CLOSE_ALL_MODAL:
      return { ...state, addGroupTask: false, addNewTask: false, moreModal: false, editTask: false, removeTask: false };
    case SET_TODO_ID:
      return { ...state, todoId: action.payload };
    case SET_TASK_ID:
      return { ...state, taskId: action.payload };
    case RESET_TASK_ID:
      return { ...state, taskId: null };
    default:
      return state;
  }
};

export default modalReducer;
