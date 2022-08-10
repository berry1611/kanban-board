import { Typography } from 'components/UI';
import { Container, IconWrapper } from './HeaderModalStyled';
import { CgClose } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { CLOSE_ALL_MODAL, RESET_TASK_ID } from 'state/actionTypes';
import { useSelector } from 'react-redux';

const HeaderModal = (props) => {
  const { taskId } = useSelector((state) => state.modal);
  const { headerName, fontSize, lineHeight, closeButton, addIcon, ...rest } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: CLOSE_ALL_MODAL });
    if (taskId) dispatch({ type: RESET_TASK_ID });
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
