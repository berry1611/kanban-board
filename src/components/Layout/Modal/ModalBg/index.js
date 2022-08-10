import React from 'react';
import { Container } from './ModalBgStyled';

const ModalBg = (props) => {
  const { children, open, ...rest } = props;
  return (
    <Container open={open} {...rest}>
      {children}
    </Container>
  );
};

export default ModalBg;
