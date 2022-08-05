import { GroupTasks, Header } from 'components/Layout';

const Home = () => {
  return (
    <>
      <Header headerName="Product Roadmap" divider paddingY={18} paddingX={20} />
      <GroupTasks />
    </>
  );
};
export default Home;
