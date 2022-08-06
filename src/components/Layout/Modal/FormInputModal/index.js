import Header from 'components/Layout/Modal/HeaderModal';
import { Button, Input, Typography } from 'components/UI';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask } from 'state/action-creators/tasks';
import { CLOSE_ALL_MODAL } from 'state/action-types';
import { Footer, Container, Form, ModalBG } from './FormInputModalStyled';

const initialState = { name: '', progress_percentage: '' };

const FormInputModal = (props) => {
  const { headerName, todo_id } = props;
  const { addNewTask } = useSelector((state) => state.modal);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    dispatch({ type: CLOSE_ALL_MODAL });
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask(formData, todo_id));
    setFormData(initialState);
    dispatch({ type: CLOSE_ALL_MODAL });
  };

  return (
    <ModalBG open={addNewTask}>
      <Container>
        <Header headerName={headerName} lineHeight={28} flexGrow={1} padding="24px" closeButton borderRadius="10px 10px 0 0" />
        <Form onSubmit={handleSubmit}>
          <Typography bold>Task Name</Typography>
          <Input name="name" placeholder="Type your Task" type="text" value={formData.name} onChange={handleChange} />
          <Typography bold>Progress</Typography>
          <Input name="progress_percentage" placeholder="70%" type="text" width="33%" value={formData.progress_percentage} onChange={handleChange} />
          <Footer>
            <Button bold padding="4px 16px" border="1px solid #e0e0e0" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24} onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" bold color="primary" padding="4px 16px" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
              Save Task
            </Button>
          </Footer>
        </Form>
      </Container>
    </ModalBG>
  );
};

export default FormInputModal;
