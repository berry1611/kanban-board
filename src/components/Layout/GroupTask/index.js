import { Board, Box } from './GroupTaskStyled';
import { Button, Typography } from 'components/UI';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { OPEN_CREATE_TASK_MODAL, RESET_TASK_ID, SET_TODO_ID } from 'state/actionTypes';
import TaskTodos from '../TaskTodos';
import { useEffect } from 'react';
import { getTasks } from 'state/actionCreators/tasks';
import { Droppable } from 'react-beautiful-dnd';

const GroupTask = (props) => {
  const { todoId, name, color, month } = props;
  const dispatch = useDispatch();

  const handleNewTask = () => {
    dispatch({ type: OPEN_CREATE_TASK_MODAL });
    dispatch({ type: SET_TODO_ID, payload: todoId });
    dispatch({ type: RESET_TASK_ID });
  };

  useEffect(() => {
    dispatch(getTasks(todoId));
  }, []);

  return (
    <Droppable droppableId={todoId.toString()}>
      {(provided) => (
        <Board color={color} ref={provided.innerRef} {...provided.droppableProps}>
          <Box color={color}>
            <Typography color={color}>{name}</Typography>
          </Box>
          <Typography bold>{month}</Typography>
          <TaskTodos todoId={todoId} />
          {provided.placeholder}
          <Button display="flex" alignItems="center" gap="6.67px" onClick={handleNewTask}>
            <MdAddCircleOutline size={20} />
            <Typography>New Task</Typography>
          </Button>
        </Board>
      )}
    </Droppable>
  );
};
export default GroupTask;
