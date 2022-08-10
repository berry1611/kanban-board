import Header from 'components/Layout/Modal/HeaderModal';
import { Container, Footer } from './DeleteConfirmationModalStyled';
import { HiOutlineExclamation } from 'react-icons/hi';
import { colors } from 'constant';
import { Typography, Button } from 'components/UI';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_ALL_MODAL } from 'state/actionTypes';
import { deleteTask } from 'state/actionCreators/tasks';
import ModalBg from '../ModalBg';

const DeleteConfirmationModal = () => {
  const { removeTask, todoId, taskId } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({ type: CLOSE_ALL_MODAL });
  };

  const handleDelete = () => {
    dispatch(deleteTask(todoId, taskId));
    dispatch({ type: CLOSE_ALL_MODAL });
  };

  return (
    <ModalBg open={removeTask}>
      <Container>
        <Header
          headerName="Delete Task"
          addIcon={<HiOutlineExclamation size={22} color={colors.danger.main} />}
          closeButton
        />
        <Typography fontSize={14} lineHeight={24}>
          Are you sure want to delete this task? your action can’t be reverted.
        </Typography>
        <Footer>
          <Button bold lineHeight={24} onClick={handleCancel}>
            Cancel
          </Button>
          <Button bold color="danger" lineHeight={24} onClick={handleDelete}>
            Delete
          </Button>
        </Footer>
      </Container>
    </ModalBg>
  );
};

export default DeleteConfirmationModal;
