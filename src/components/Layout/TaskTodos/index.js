import React from 'react';
import { useSelector } from 'react-redux';
import TaskTodo from '../TaskTodo';
import { Container } from './TaskTodosStyled';

const TaskTodos = ({ todo_id, setTaskId, setTodoId }) => {
  const tasks = useSelector((state) => state.kanban.tasks);
  const filteredTasks = tasks.filter((task) => task.todo_id === todo_id);

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
        {filteredTasks.map((task) => (
          <TaskTodo key={task.id} taskId={task.id} setTodoId={setTodoId} todo_id={todo_id} setTaskId={setTaskId} taskName={task.name} progress={task.progress_percentage} />
        ))}
      </Container>
    </>
  );
};

export default TaskTodos;
