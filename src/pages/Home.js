import { DeleteConfirmationModal, FormInputModal, GroupTasks, Header, MoreModal } from 'components/Layout';
import { storageKey } from 'constant/storageKey';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodos } from 'state/action-creators/todos';

const Home = () => {
  const user = localStorage.getItem(storageKey.USER_INFO);
  const [todoId, setTodoId] = useState(null);
  const [taskId, setTaskId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) navigate('/v1/login');
  }, []);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <>
      <Header divider padding="18px 20px" />
      <GroupTasks setTodoId={setTodoId} setTaskId={setTaskId} />
      <FormInputModal todo_id={todoId} task_id={taskId} setTaskId={setTaskId} />
      <MoreModal taskId={taskId} setTaskId={setTaskId} todoId={todoId} setTodoId={setTodoId} />
      <DeleteConfirmationModal todoId={todoId} taskId={taskId} />
    </>
  );
};
export default Home;
