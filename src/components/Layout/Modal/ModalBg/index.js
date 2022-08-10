import React from 'react';
import { Container } from './ModalBgStyled';

const ModalBg = (props) => {
  const { children, open, ...rest } = props;
  return <Container open={open}>{children}</Container>;
};

export default ModalBg;
