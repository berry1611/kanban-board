import React from 'react';
import { useSelector } from 'react-redux';
import GroupTask from '../GroupTask';
import { Container } from './GroupTasksStyled';

const color = ['primary', 'secondary', 'danger', 'success'];

const GroupTasks = () => {
  const groupTasks = useSelector((state) => state.groupTasks);

  return (
    <Container>
      {groupTasks.map((groupTask, index) => (
        <GroupTask key={groupTask.id} name={groupTask.title} color={color[index % 4]} month={groupTask.description} />
      ))}
    </Container>
  );
};

export default GroupTasks;
