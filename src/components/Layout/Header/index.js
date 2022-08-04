import { Typography } from 'components/UI';
import { Container } from './HeaderStyled';

const Header = () => {
  return (
    <Container>
      <Typography fontSize={18} fontWeight={700}>
        Product Roadmap
      </Typography>
    </Container>
  );
};

export default Header;
