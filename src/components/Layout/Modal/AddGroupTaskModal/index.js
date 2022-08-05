import Header from 'components/Layout/Modal/HeaderModal';
import { Button, Input, Typography } from 'components/UI';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from 'state/action-creators/todos';
import { Footer, Container, Form, ModalBG } from './AddGroupTaskModalStyled';

const initialState = { title: '', description: '' };

const AddGroupTaskModal = (props) => {
  const { open, setOpen } = props;
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createTodo(formData));
    setFormData(initialState);
    setOpen(false);
  };

  return (
    <ModalBG open={open}>
      <Container>
        <Header headerName="Create Group Task" lineHeight={28} flexGrow={1} padding="24px" closeButton borderRadius="10px 10px 0 0" setOpen={setOpen} />
        <Form onSubmit={handleSubmit}>
          <Typography bold>Title</Typography>
          <Input placeholder="Title" type="text" name="title" value={formData.title} onChange={handleChange} />
          <Typography bold>Description</Typography>
          <Input placeholder="Description" type="text" name="description" value={formData.description} onChange={handleChange} />
          <Footer>
            <Button onClick={handleCancel} bold padding="4px 16px" border="1px solid #e0e0e0" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
              Cancel
            </Button>
            <Button bold color="primary" padding="4px 16px" boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)" borderRadius={8} fontSize={14} lineHeight={24}>
              Add New Group
            </Button>
          </Footer>
        </Form>
      </Container>
    </ModalBG>
  );
};

export default AddGroupTaskModal;