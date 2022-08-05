import React from 'react';
import { Board, Box } from './GroupTaskStyled';
import { Button, Typography } from 'components/UI';
import TaskTodo from '../TaskTodo';
import { MdAddCircleOutline } from 'react-icons/md';

const GroupTask = (props) => {
  const { name, color, month } = props;

  return (
    <Board color={color}>
      <Box color={color}>
        <Typography color={color}>{name}</Typography>
      </Box>
      <Typography bold>{month}</Typography>
      <TaskTodo />
      <Button display="flex" alignItems="center" padding={0}>
        <MdAddCircleOutline size={20} />
        <Typography paddingLeft={6.67}>New Task</Typography>
      </Button>
    </Board>
  );
};
export default GroupTask;
