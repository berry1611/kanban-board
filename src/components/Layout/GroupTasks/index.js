import React from 'react';
import GroupTask from '../GroupTask';
import { Container } from './GroupTasksStyled';

const groupTasks = [
  {
    name: 'Group Task 1',
    color: 'primary',
    month: 'January - March',
  },
  {
    name: 'Group Task 2',
    color: 'secondary',
    month: 'April - June',
  },
  {
    name: 'Group Task 3',
    color: 'danger',
    month: 'July - September',
  },
  {
    name: 'Group Task 4',
    color: 'success',
    month: 'October - December',
  },
];

const GroupTasks = () => {
  return (
    <Container>
      {groupTasks.map((groupTask) => (
        <GroupTask name={groupTask.name} color={groupTask.color} month={groupTask.month} />
      ))}
    </Container>
  );
};

export default GroupTasks;
