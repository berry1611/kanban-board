import { Typography } from 'components/UI';
import { Box, Container, Divider, IconWrapper, ProgressBar, ProgressBarBG } from './TaskTodoStyled';
import { MdMoreHoriz } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { colors } from 'constant';
import { useDispatch } from 'react-redux';
import { OPEN_MORE_MODAL } from 'state/action-types';
import { useEffect, useRef, useState } from 'react';

const TaskTodo = (props) => {
  const { taskId, taskName, progress, setTaskId, setTodoId, todo_id } = props;
  const [offset, setOffset] = useState({ offsetLeft: 0, offsetTop: 0 });
  const dispatch = useDispatch();
  const iconRef = useRef();

  useEffect(() => {
    if (iconRef.current) {
      setOffset({
        offsetLeft: iconRef.current.offsetLeft,
        offsetTop: iconRef.current.offsetTop,
      });
    }
  }, []);

  const handleOpenMoreModal = () => {
    dispatch({ type: OPEN_MORE_MODAL });
    setTaskId(taskId);
    setTodoId(todo_id);
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
    <Container>
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
          <IconWrapper>
            <MdMoreHoriz size={30} color="#757575" onClick={handleOpenMoreModal} />
          </IconWrapper>
        </Box>
      ) : (
        <Box>
          <ProgressBarBG>
            <ProgressBar width={`${progress}%`} />
          </ProgressBarBG>
          <Typography margin="0 30px 0 0" lineHeight={16} fontFamily="Inter" color="#757575">
            {progress}%
          </Typography>
          <IconWrapper ref={iconRef}>
            <MdMoreHoriz size={30} color="#757575" onClick={handleOpenMoreModal} />
          </IconWrapper>
        </Box>
      )}
    </Container>
  );
};

export default TaskTodo;
