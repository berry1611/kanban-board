import { useSelector } from 'react-redux';
import GroupTask from '../GroupTask';
import { GridContainer } from './GroupTasksStyled';

const color = ['primary', 'secondary', 'danger', 'success'];

const GroupTasks = () => {
  const { groupTasks } = useSelector((state) => state.kanban);

  return (
    <GridContainer>
      {groupTasks.map((groupTask, index) => (
        <GroupTask
          key={groupTask.id}
          todoId={groupTask.id}
          name={groupTask.title}
          color={color[index % 4]}
          month={groupTask.description}
        />
      ))}
    </GridContainer>
  );
};

export default GroupTasks;
