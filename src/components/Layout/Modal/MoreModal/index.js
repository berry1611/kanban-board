import { Container, InvisBG, ListItem } from './MoreModalStyled';
import { FiArrowRight, FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import {
  CLOSE_MORE_MODAL,
  OPEN_EDIT_TASK_MODAL,
  OPEN_MORE_MODAL,
  OPEN_REMOVE_TASK_MODAL,
  SET_TASK_ID,
  SET_TODO_ID,
} from 'state/actionTypes';
import { updateTask } from 'state/actionCreators/tasks';

const MoreModal = () => {
  const { moreModal, taskId, todoId } = useSelector((state) => state.modal);
  const groupTasksIds = useSelector((state) => state.kanban.groupTasks.map((task) => task.id));
  const currentGroupTasksId = groupTasksIds.indexOf(todoId);
  const { offsetLeft, offsetTop } = useSelector((state) => state.offset);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: CLOSE_MORE_MODAL });
  };

  const handleEdit = () => {
    dispatch({ type: OPEN_EDIT_TASK_MODAL });
    dispatch({ type: SET_TASK_ID, payload: taskId });
  };

  const handleDelete = () => {
    dispatch({ type: OPEN_REMOVE_TASK_MODAL });
    dispatch({ type: SET_TODO_ID, payload: todoId });
    dispatch({ type: SET_TASK_ID, payload: taskId });
  };

  const handleMoveRight = () => {
    dispatch(updateTask({ target_todo_id: groupTasksIds[currentGroupTasksId + 1] }, todoId, taskId));
  };

  const handleMoveLeft = () => {
    dispatch(updateTask({ target_todo_id: groupTasksIds[currentGroupTasksId - 1] }, todoId, taskId));
  };

  const handleOpenModal = () => {
    dispatch({ type: OPEN_MORE_MODAL });
  };

  const handleCloseModal = () => {
    dispatch({ type: CLOSE_MORE_MODAL });
  };

  return (
    <InvisBG
      top={offsetTop > 0.75 * (window.innerHeight + window.scrollY) ? `${offsetTop - 110}px` : `${offsetTop + 15}px`}
      left={offsetLeft > 0.75 * window.innerWidth ? `${offsetLeft - 340}px` : `${offsetLeft}px`}
      open={moreModal}
      onClick={handleClose}
    >
      <Container onMouseEnter={handleOpenModal} onMouseLeave={handleCloseModal}>
        {todoId !== groupTasksIds[groupTasksIds.length - 1] ? (
          <ListItem onClick={handleMoveRight}>
            <FiArrowRight size={16} /> Move Right
          </ListItem>
        ) : null}
        {todoId !== groupTasksIds[0] ? (
          <ListItem onClick={handleMoveLeft}>
            <FiArrowLeft size={16} /> Move Left
          </ListItem>
        ) : null}
        <ListItem onClick={handleEdit}>
          <BiEditAlt size={20} /> Edit
        </ListItem>
        <ListItem delete onClick={handleDelete}>
          <FiTrash2 size={18} /> Delete
        </ListItem>
      </Container>
    </InvisBG>
  );
};

export default MoreModal;
