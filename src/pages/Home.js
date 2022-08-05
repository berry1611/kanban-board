import { GroupTasks, Header } from 'components/Layout';

const Home = () => {
  return (
    <>
      <Header headerName="Product Roadmap" divider padding="18px 20px" />
      <GroupTasks />
    </>
  );
};
export default Home;
