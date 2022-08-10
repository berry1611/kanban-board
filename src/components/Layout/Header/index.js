import { Button, Typography } from 'components/UI';
import { Container } from './HeaderStyled';
import { MdAdd } from 'react-icons/md';
import AddGroupTaskModal from '../Modal/AddGroupTaskModal';
import { useDispatch } from 'react-redux';
import { LOGOUT, OPEN_GROUP_TASK_MODAL } from 'state/actionTypes';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: OPEN_GROUP_TASK_MODAL });
  };

  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    navigate(0);
  };

  return (
    <Container>
      <Typography fontSize={18} bold>
        Product Roadmap
      </Typography>
      <Button onClick={handleClick} fontSize={12} alignItems="center" lineHeight={20}>
        <MdAdd />
        Add New Group
      </Button>
      <AddGroupTaskModal />
      <Button onClick={handleLogout} fontSize={12} alignItems="center" margin="0 0 0 auto" lineHeight={20}>
        Logout
      </Button>
    </Container>
  );
};

export default Header;
