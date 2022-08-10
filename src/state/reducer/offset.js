import { SET_OFFSET } from 'state/actionTypes';

const initialState = {
  taskId: null,
  offsetLeft: 0,
  offsetTop: 0,
};

const offsetReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFSET:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default offsetReducer;
