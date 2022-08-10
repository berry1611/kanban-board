import React from 'react';
import { useSelector } from 'react-redux';
import TaskTodo from '../TaskTodo';
import { Container } from './TaskTodosStyled';

const TaskTodos = ({ todoId }) => {
  const tasks = useSelector((state) => state.kanban.tasks);
  const filteredTasks = tasks.filter((task) => task.todo_id === todoId);

  if (!filteredTasks.length) {
    return (
      <Container>
        <TaskTodo taskName={null} />
      </Container>
    );
  }

  return (
    <>
      <Container>
        {filteredTasks.map((task, index) => (
          <TaskTodo
            index={index}
            key={task.id}
            taskId={task.id}
            todoId={todoId}
            taskName={task.name}
            progress={task.progress_percentage}
          />
        ))}
      </Container>
    </>
  );
};

export default TaskTodos;
