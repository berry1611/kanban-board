import Header from 'components/Layout/Modal/HeaderModal';
import { Button, Input, Typography } from 'components/UI';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from 'state/actionCreators/tasks';
import { CLOSE_ALL_MODAL, RESET_TASK_ID } from 'state/actionTypes';
import ModalBg from '../ModalBg';
import { Footer, Container, Form } from './FormInputModalStyled';

const initialState = { name: '', progress_percentage: '' };

const FormInputModal = () => {
  const { todoId, taskId } = useSelector((state) => state.modal);
  const task = useSelector((state) => (taskId ? state.kanban.tasks.find((p) => p.id === taskId) : null));
  const { addNewTask, editTask } = useSelector((state) => state.modal);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setFormData(task);
    } else {
      setFormData(initialState);
    }
  }, [task]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    dispatch({ type: CLOSE_ALL_MODAL });
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!editTask) {
      dispatch(createTask(formData, todoId));
    } else {
      dispatch(updateTask({ ...formData, target_todo_id: todoId }, todoId, taskId));
      dispatch({ type: RESET_TASK_ID });
    }
    setFormData(initialState);
    dispatch({ type: CLOSE_ALL_MODAL });
  };

  return (
    <ModalBg open={addNewTask || editTask}>
      <Container>
        <Header
          headerName={!editTask ? 'Create Task' : 'Edit Task'}
          lineHeight={28}
          flexGrow={1}
          padding="24px"
          closeButton
          borderRadius="10px 10px 0 0"
        />
        <Form onSubmit={handleSubmit}>
          <Typography bold>Task Name</Typography>
          <Input name="name" placeholder="Type your Task" type="text" value={formData.name} onChange={handleChange} />
          <Typography bold>Progress</Typography>
          <Input
            name="progress_percentage"
            placeholder="70%"
            type="text"
            width="33%"
            value={formData.progress_percentage}
            onChange={handleChange}
          />
          <Footer>
            <Button bold lineHeight={24} onClick={handleCancel}>
              Cancel
            </Button>
            <Button type="submit" bold lineHeight={24}>
              {!editTask ? 'Save Task' : 'Save Change'}
            </Button>
          </Footer>
        </Form>
      </Container>
    </ModalBg>
  );
};

export default FormInputModal;
