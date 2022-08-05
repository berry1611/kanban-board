import { Typography } from 'components/UI';
import { Container, IconWrapper } from './HeaderStyled';
import { CgClose } from 'react-icons/cg';

const Header = (props) => {
  const { headerName, fontSize, lineHeight, closeButton, addIcon, ...rest } = props;

  return (
    <Container {...rest}>
      {addIcon ? <IconWrapper marginRight={11}>{addIcon}</IconWrapper> : null}
      <Typography fontSize={fontSize || 18} bold lineHeight={lineHeight}>
        {headerName}
      </Typography>
      {closeButton ? (
        <IconWrapper marginLeft="auto">
          <CgClose size={20} />
        </IconWrapper>
      ) : null}
    </Container>
  );
};

export default Header;
