import { Typography } from 'components/UI';
import { Container, IconWrapper } from './HeaderModalStyled';
import { CgClose } from 'react-icons/cg';

const HeaderModal = (props) => {
  const { headerName, fontSize, lineHeight, closeButton, addIcon, setOpen, ...rest } = props;

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Container {...rest}>
      {addIcon ? <IconWrapper margin="0 11px 0 0">{addIcon}</IconWrapper> : null}
      <Typography fontSize={fontSize || 18} bold lineHeight={lineHeight}>
        {headerName}
      </Typography>
      {closeButton ? (
        <IconWrapper margin="0 0 0 auto">
          <CgClose size={20} onClick={handleClick} />
        </IconWrapper>
      ) : null}
    </Container>
  );
};

export default HeaderModal;
