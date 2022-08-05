import React from 'react';
import { InputStyled } from './InputStyled';

const Input = (props) => {
  const { id, name, placeholder, type, ...rest } = props;
  return <InputStyled placeholder={placeholder} id={id} name={name} type={type} {...rest} />;
};

export default Input;
