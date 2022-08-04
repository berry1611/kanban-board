import { Typography } from 'components/UI';
import { Box, Container, Divider, ProgressBar, ProgressBarBG } from './TaskTodoStyled';
import { MdMoreHoriz } from 'react-icons/md';

const TaskTodo = (props) => {
  const { taskName, progress } = props;

  if (!taskName) {
    return (
      <Container paddingY={8} paddingX={16}>
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
      <Box>
        <ProgressBarBG>
          <ProgressBar width={`${progress}`} />
        </ProgressBarBG>
        <Typography marginRight={30}>50%</Typography>
        <MdMoreHoriz size={30} color="#757575" />
      </Box>
    </Container>
  );
};

export default TaskTodo;
