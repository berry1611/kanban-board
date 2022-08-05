import { Typography } from 'components/UI';
import { Container, IconWrapper } from './HeaderModalStyled';
import { CgClose } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { ADD_GROUP_TASK_MODAL } from 'state/action-types';

const HeaderModal = (props) => {
  const { headerName, fontSize, lineHeight, closeButton, addIcon, ...rest } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: ADD_GROUP_TASK_MODAL });
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
