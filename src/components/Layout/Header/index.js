import { Typography } from 'components/UI';
import { Container } from './HeaderStyled';

const Header = (props) => {
  const { headerName, fontSize, lineHeight, ...rest } = props;

  return (
    <Container {...rest}>
      <Typography fontSize={fontSize || 18} bold lineHeight={lineHeight}>
        {headerName}
      </Typography>
    </Container>
  );
};

export default Header;
