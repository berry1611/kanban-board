import { Typography } from 'components/UI';
import { Box, Container, Divider, IconWrapper, ProgressBar, ProgressBarBG } from './TaskTodoStyled';
import { MdMoreHoriz } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { colors } from 'constant';
import { useDispatch } from 'react-redux';
import { OPEN_MORE_MODAL } from 'state/action-types';

const TaskTodo = (props) => {
  const { taskId, taskName, progress, setTaskId, setTodoId, todo_id } = props;
  const dispatch = useDispatch();

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
          <MdMoreHoriz size={30} color="#757575" onClick={handleOpenMoreModal} />
        </Box>
      ) : (
        <Box>
          <ProgressBarBG>
            <ProgressBar width={`${progress}%`} />
          </ProgressBarBG>
          <Typography margin="0 30px 0 0" lineHeight={16} fontFamily="Inter" color="#757575">
            {progress}%
          </Typography>
          <MdMoreHoriz size={30} color="#757575" onClick={handleOpenMoreModal} />
        </Box>
      )}
    </Container>
  );
};

export default TaskTodo;
