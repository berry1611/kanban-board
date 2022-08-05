import Header from 'components/Layout/Header';
import { Container, Footer } from './DeleteConfirmationModalStyled';
import { HiOutlineExclamation } from 'react-icons/hi';
import { colors } from 'constant';
import { Typography, Button } from 'components/UI';

const DeleteConfirmationModal = () => {
  return (
    <Container>
      <Header headerName="Delete Task" addIcon={<HiOutlineExclamation size={22} color={colors.danger.main} />} closeButton />
      <Typography fontSize={14} lineHeight={24}>
        Are you sure want to delete this task? your action can’t be reverted.
      </Typography>
      <Footer>
        <Button bold paddingX={16} paddingY={4} border="1px solid #e0e0e0" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
          Cancel
        </Button>
        <Button bold color="danger" paddingX={16} paddingY={4} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
          Delete
        </Button>
      </Footer>
    </Container>
  );
};

export default DeleteConfirmationModal;
