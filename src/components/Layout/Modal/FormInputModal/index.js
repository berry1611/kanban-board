import Header from 'components/Layout/Header';
import { Button, Input, Typography } from 'components/UI';
import React from 'react';
import { Footer, Container, Form } from './FormInputModalStyled';

const FormInputModal = (props) => {
  const { headerName } = props;

  return (
    <Container>
      <Header headerName={headerName} lineHeight={28} flexGrow={1} padding={24} closeButton />
      <Form>
        <Typography bold>Task Name</Typography>
        <Input placeholder="Type your Task" type="text" />
        <Typography bold>Progress</Typography>
        <Input placeholder="70%" type="text" width="33%" />
      </Form>
      <Footer>
        <Button bold paddingX={16} paddingY={4} border="1px solid #e0e0e0" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
          Cancel
        </Button>
        <Button bold color="primary" paddingX={16} paddingY={4} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
          Save Task
        </Button>
      </Footer>
    </Container>
  );
};

export default FormInputModal;
