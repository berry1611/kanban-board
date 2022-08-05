import { Button, Typography } from 'components/UI';
import { Container } from './HeaderStyled';
import { MdAdd } from 'react-icons/md';
import AddGroupTaskModal from '../Modal/AddGroupTaskModal';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_GROUP_TASK_MODAL } from 'state/action-types';

const Header = () => {
  const { addGroupTask } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: ADD_GROUP_TASK_MODAL });
  };

  return (
    <Container>
      <Typography fontSize={18} bold>
        Product Roadmap
      </Typography>
      <Button onClick={handleClick} display="flex" alignItems="center" color="primary" padding="4px 16px" lineHeight={20} borderRadius={8} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)">
        <MdAdd />
        Add New Group
      </Button>
      <AddGroupTaskModal open={addGroupTask} />
    </Container>
  );
};

export default Header;
