import React from 'react';
import { useSelector } from 'react-redux';
import TaskTodo from '../TaskTodo';
import { Container } from './TaskTodosStyled';

const TaskTodos = ({ todo_id }) => {
  const tasks = useSelector((state) => state.tasks);
  const filteredTasks = tasks.filter((task) => task.todo_id === todo_id);

  if (!filteredTasks.length) {
    return <TaskTodo taskName={null} />;
  }

  return (
    <Container>
      {filteredTasks.map((task) => (
        <TaskTodo key={task.id} taskName={task.name} progress={task.progress_percentage} />
      ))}
    </Container>
  );
};

export default TaskTodos;
