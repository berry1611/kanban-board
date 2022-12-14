import { DeleteConfirmationModal, FormInputModal, GroupTasks, Header, MoreModal } from 'components/Layout';
import ErrorNotif from 'components/Layout/ErrorNotif';
import { LoadingSpinner } from 'components/UI';
import { storageKey } from 'constant/storageKey';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodos } from 'state/actionCreators/todos';
import { DragDropContext } from 'react-beautiful-dnd';
import { updateTask } from 'state/actionCreators/tasks';

const Home = () => {
  const user = localStorage.getItem(storageKey.USER_INFO);
  const { isLoading, errorMessage } = useSelector((state) => state.kanban);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) navigate('/v1/login');
  }, []);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const handleDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;
    if (destination.index === source.index && destination.droppableId === source.droppableId) return;

    dispatch(updateTask({ target_todo_id: destination.droppableId }, source.droppableId, draggableId));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {errorMessage ? <ErrorNotif errorMessage={errorMessage} /> : null}
      {isLoading ? <LoadingSpinner /> : null}
      <Header divider padding="18px 20px" />
      <GroupTasks />
      <FormInputModal />
      <MoreModal />
      <DeleteConfirmationModal />
    </DragDropContext>
  );
};
export default Home;
