import Header from 'components/Layout/Modal/HeaderModal';
import { Button, Input, Typography } from 'components/UI';
import { Footer, Container, Form, ModalBG } from './FormInputModalStyled';

const FormInputModal = (props) => {
  const { headerName, open } = props;

  return (
    <ModalBG open={open}>
      <Container>
        <Header headerName={headerName} lineHeight={28} flexGrow={1} padding="24px" closeButton borderRadius="10px 10px 0 0" />
        <Form>
          <Typography bold>Task Name</Typography>
          <Input placeholder="Type your Task" type="text" />
          <Typography bold>Progress</Typography>
          <Input placeholder="70%" type="text" width="33%" />
        </Form>
        <Footer>
          <Button bold padding="4px 16px" border="1px solid #e0e0e0" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
            Cancel
          </Button>
          <Button bold color="primary" padding="4px 16px" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
            Save Task
          </Button>
        </Footer>
      </Container>
    </ModalBG>
  );
};

export default FormInputModal;
