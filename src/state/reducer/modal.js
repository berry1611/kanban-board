import { OPEN_GROUP_TASK_MODAL, OPEN_CREATE_TASK_MODAL, CLOSE_ALL_MODAL, OPEN_MORE_MODAL, OPEN_EDIT_TASK_MODAL, CLOSE_MORE_MODAL, OPEN_REMOVE_TASK_MODAL } from 'state/action-types';

const initialState = {
  addGroupTask: false,
  addNewTask: false,
  editTask: false,
  removeTask: false,
  moreModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    // Modal Toggle
    case OPEN_GROUP_TASK_MODAL:
      return { ...state, modal: { ...state.modal, addGroupTask: true } };
    case OPEN_CREATE_TASK_MODAL:
      return { ...state, modal: { ...state.modal, addNewTask: true } };
    case OPEN_EDIT_TASK_MODAL:
      return { ...state, modal: { ...state.modal, editTask: true } };
    case OPEN_REMOVE_TASK_MODAL:
      return { ...state, modal: { ...state.modal, removeTask: true } };
    case OPEN_MORE_MODAL:
      return { ...state, modal: { ...state.modal, moreModal: true } };
    case CLOSE_MORE_MODAL:
      return { ...state, modal: { ...state.modal, moreModal: false } };
    case CLOSE_ALL_MODAL:
      return { ...state, modal: { addGroupTask: false, addNewTask: false, moreModal: false, editTask: false, removeTask: false } };
    default:
      return state;
  }
};

export default modalReducer;
