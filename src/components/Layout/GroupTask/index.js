import { Board, Box } from './GroupTaskStyled';
import { Button, Typography } from 'components/UI';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { OPEN_CREATE_TASK_MODAL } from 'state/action-types';
import TaskTodos from '../TaskTodos';
import { useEffect } from 'react';
import { getTasks } from 'state/action-creators/tasks';

const GroupTask = (props) => {
  const { todo_id, setTodoId, setTaskId, name, color, month } = props;
  const dispatch = useDispatch();

  const handleNewTask = () => {
    dispatch({ type: OPEN_CREATE_TASK_MODAL });
    setTodoId(todo_id);
    setTaskId(null);
  };

  useEffect(() => {
    dispatch(getTasks(todo_id));
  }, []);

  return (
    <Board color={color}>
      <Box color={color}>
        <Typography color={color}>{name}</Typography>
      </Box>
      <Typography bold>{month}</Typography>
      <TaskTodos todo_id={todo_id} setTodoId={setTodoId} setTaskId={setTaskId} />
      <Button id={todo_id} display="flex" alignItems="center" gap="6.67px" onClick={handleNewTask}>
        <MdAddCircleOutline size={20} />
        <Typography>New Task</Typography>
      </Button>
    </Board>
  );
};
export default GroupTask;
