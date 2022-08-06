import { combineReducers } from 'redux';
import kanban from './kanban';
import modal from './modal';
import offset from './offset';

export default combineReducers({ kanban, modal, offset });
