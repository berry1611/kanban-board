import { Button, Typography } from 'components/UI';
import { Container } from './HeaderStyled';
import { MdAdd } from 'react-icons/md';

const Header = () => {
  return (
    <Container>
      <Typography fontSize={18} bold>
        Product Roadmap
      </Typography>
      <Button display="flex" alignItems="center" color="primary" padding="4px 16px" lineHeight={20} borderRadius={8} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)">
        <MdAdd />
        Add New Group
      </Button>
    </Container>
  );
};

export default Header;
