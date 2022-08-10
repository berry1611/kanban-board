import { Typography } from 'components/UI';
import { Box, Container, Divider, IconWrapper, ProgressBar, ProgressBarBG } from './TaskTodoStyled';
import { MdMoreHoriz } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { colors } from 'constant';
import { useDispatch } from 'react-redux';
import { CLOSE_MORE_MODAL, OPEN_MORE_MODAL, SET_OFFSET, SET_TASK_ID, SET_TODO_ID } from 'state/actionTypes';
import { useRef } from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskTodo = (props) => {
  const { index, taskId, taskName, progress, todoId } = props;
  const dispatch = useDispatch();
  const iconRef = useRef();

  const handleOpenMoreModal = () => {
    dispatch({ type: OPEN_MORE_MODAL });
    dispatch({ type: SET_TASK_ID, payload: taskId });
    dispatch({ type: SET_TODO_ID, payload: todoId });
    if (iconRef.current)
      dispatch({
        type: SET_OFFSET,
        payload: {
          taskId,
          offsetLeft: iconRef.current.offsetLeft,
          offsetTop: iconRef.current.offsetTop,
        },
      });
  };

  const handleCloseModal = () => {
    dispatch({ type: CLOSE_MORE_MODAL });
  };

  if (!taskName) {
    return (
      <Container padding="8px 16px">
        <Typography color="#757575" fontSize={14} lineHeight={24}>
          No Task
        </Typography>
      </Container>
    );
  }

  return (
    <Draggable draggableId={taskId.toString()} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <Typography bold fontSize={14} lineHeight={24}>
            {taskName}
          </Typography>
          <Divider />
          {progress >= 100 ? (
            <Box>
              <ProgressBarBG>
                <ProgressBar width="100%" complete />
              </ProgressBarBG>
              <IconWrapper margin="0 30px 0 0">
                <BsFillCheckCircleFill size={16} color={colors.success.main} />
              </IconWrapper>
              <IconWrapper
                ref={iconRef}
                onTouchStart={handleOpenMoreModal}
                onMouseEnter={handleOpenMoreModal}
                onMouseLeave={handleCloseModal}
              >
                <MdMoreHoriz size={30} color="#757575" />
              </IconWrapper>
            </Box>
          ) : (
            <Box>
              <ProgressBarBG>
                <ProgressBar width={`${progress || 0}%`} />
              </ProgressBarBG>
              <Typography margin="0 30px 0 0" lineHeight={16} fontFamily="Inter" color="#757575">
                {progress || 0}%
              </Typography>
              <IconWrapper
                ref={iconRef}
                onTouchStart={handleOpenMoreModal}
                onMouseEnter={handleOpenMoreModal}
                onMouseLeave={handleCloseModal}
              >
                <MdMoreHoriz size={30} color="#757575" />
              </IconWrapper>
            </Box>
          )}
        </Container>
      )}
    </Draggable>
  );
};

export default TaskTodo;
