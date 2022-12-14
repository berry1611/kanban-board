import React from 'react';
import { ButtonStyled } from './ButtonStyled';

const Button = (props) => {
  const { children, type, ...rest } = props;
  return (
    <ButtonStyled type={type || 'button'} color="primary" {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
