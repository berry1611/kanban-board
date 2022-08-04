import { Typography } from 'components/UI';
import { Container } from './HeaderStyled';

const Header = () => {
  return (
    <Container>
      <Typography fontSize={18} bold>
        Product Roadmap
      </Typography>
    </Container>
  );
};

export default Header;
