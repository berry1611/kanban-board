import { Button, Typography } from 'components/UI';
import { Container } from './HeaderStyled';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';
import AddGroupTaskModal from '../Modal/AddGroupTaskModal';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Container>
      <Typography fontSize={18} bold>
        Product Roadmap
      </Typography>
      <Button onClick={handleClick} display="flex" alignItems="center" color="primary" padding="4px 16px" lineHeight={20} borderRadius={8} boxShadow="0px 1px 2px rgba(0, 0, 0, 0.12)">
        <MdAdd />
        Add New Group
      </Button>
      <AddGroupTaskModal open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Header;
