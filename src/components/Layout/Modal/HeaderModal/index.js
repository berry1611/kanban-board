import { Typography } from 'components/UI';
import { Container, IconWrapper } from './HeaderModalStyled';
import { CgClose } from 'react-icons/cg';

const HeaderModal = (props) => {
  const { headerName, fontSize, lineHeight, closeButton, addIcon, ...rest } = props;

  return (
    <Container {...rest}>
      {addIcon ? <IconWrapper margin="0 11px 0 0">{addIcon}</IconWrapper> : null}
      <Typography fontSize={fontSize || 18} bold lineHeight={lineHeight}>
        {headerName}
      </Typography>
      {closeButton ? (
        <IconWrapper margin="0 0 0 auto">
          <CgClose size={20} />
        </IconWrapper>
      ) : null}
    </Container>
  );
};

export default HeaderModal;
