import { Container, InvisBG, ListItem } from './MoreModalStyled';
import { FiArrowRight, FiArrowLeft, FiTrash2 } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MORE_MODAL, OPEN_EDIT_TASK_MODAL } from 'state/action-types';

const MoreModal = ({ taskId, setTaskId }) => {
  const { moreModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: CLOSE_MORE_MODAL });
  };

  const handleEdit = () => {
    dispatch({ type: OPEN_EDIT_TASK_MODAL });
    setTaskId(taskId);
  };

  return (
    <InvisBG open={moreModal} onClick={handleClose}>
      <Container>
        <ListItem>
          <FiArrowRight size={16} /> Move Right
        </ListItem>
        <ListItem>
          <FiArrowLeft size={16} /> Move Left
        </ListItem>
        <ListItem onClick={handleEdit}>
          <BiEditAlt size={20} /> Edit
        </ListItem>
        <ListItem delete>
          <FiTrash2 size={18} /> Delete
        </ListItem>
      </Container>
    </InvisBG>
  );
};

export default MoreModal;
