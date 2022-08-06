import { useState } from 'react';
import { useSelector } from 'react-redux';
import GroupTask from '../GroupTask';
import { FormInputModal } from '../Modal';
import { Container } from './GroupTasksStyled';

const color = ['primary', 'secondary', 'danger', 'success'];

const GroupTasks = () => {
  const groupTasks = useSelector((state) => state.groupTasks);
  const [todoId, setTodoId] = useState(null);

  return (
    <Container>
      {groupTasks.map((groupTask, index) => (
        <GroupTask key={groupTask.id} todo_id={groupTask.id} setTodoId={setTodoId} name={groupTask.title} color={color[index % 4]} month={groupTask.description} />
      ))}
      <FormInputModal headerName="Create Task" todo_id={todoId} />
    </Container>
  );
};

export default GroupTasks;
