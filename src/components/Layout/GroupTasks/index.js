import { useSelector } from 'react-redux';
import GroupTask from '../GroupTask';
import { Container } from './GroupTasksStyled';

const color = ['primary', 'secondary', 'danger', 'success'];

const GroupTasks = ({ setTodoId, setTaskId }) => {
  const groupTasks = useSelector((state) => state.groupTasks);

  return (
    <Container>
      {groupTasks.map((groupTask, index) => (
        <GroupTask key={groupTask.id} todo_id={groupTask.id} setTodoId={setTodoId} setTaskId={setTaskId} name={groupTask.title} color={color[index % 4]} month={groupTask.description} />
      ))}
    </Container>
  );
};

export default GroupTasks;
