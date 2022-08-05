import Header from 'components/Layout/Modal/HeaderModal';
import { Container, Footer, ModalBG } from './DeleteConfirmationModalStyled';
import { HiOutlineExclamation } from 'react-icons/hi';
import { colors } from 'constant';
import { Typography, Button } from 'components/UI';

const DeleteConfirmationModal = (props) => {
  const { open } = props;

  return (
    <ModalBG open={open}>
      <Container>
        <Header headerName="Delete Task" addIcon={<HiOutlineExclamation size={22} color={colors.danger.main} />} closeButton />
        <Typography fontSize={14} lineHeight={24}>
          Are you sure want to delete this task? your action can’t be reverted.
        </Typography>
        <Footer>
          <Button bold padding="4px 16px" border="1px solid #e0e0e0" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
            Cancel
          </Button>
          <Button bold color="danger" padding="4px 16px" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
            Delete
          </Button>
        </Footer>
      </Container>
    </ModalBG>
  );
};

export default DeleteConfirmationModal;
