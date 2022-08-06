import { Typography } from 'components/UI';
import { Box, Container, Divider, IconWrapper, ProgressBar, ProgressBarBG } from './TaskTodoStyled';
import { MdMoreHoriz } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { colors } from 'constant';

const TaskTodo = (props) => {
  const { taskName, progress } = props;

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
      {progress === 100 ? (
        <Box>
          <ProgressBarBG>
            <ProgressBar width={`${progress}`} complete />
          </ProgressBarBG>
          <IconWrapper margin="0 30px 0 0">
            <BsFillCheckCircleFill size={16} color={colors.success.main} />
          </IconWrapper>
          <MdMoreHoriz size={30} color="#757575" />
        </Box>
      ) : (
        <Box>
          <ProgressBarBG>
            <ProgressBar width={`${progress}`} />
          </ProgressBarBG>
          <Typography margin="0 30px 0 0" lineHeight={16} fontFamily="Inter" color="#757575">
            {progress}
          </Typography>
          <MdMoreHoriz size={24} color="#757575" />
        </Box>
      )}
    </Container>
  );
};

export default TaskTodo;
