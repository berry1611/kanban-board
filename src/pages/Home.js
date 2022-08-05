import { GroupTasks, Header } from 'components/Layout';
import { storageKey } from 'constant/storageKey';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodos } from 'state/action-creators/todos';

const Home = () => {
  const user = localStorage.getItem(storageKey.USER_INFO);
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
      <Header headerName="Product Roadmap" divider padding="18px 20px" />
      <GroupTasks />
    </>
  );
};
export default Home;
