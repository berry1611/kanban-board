import React from 'react';
import { InputStyled } from './InputStyled';

const Input = (props) => {
  const { id, name, placeholder, type, value, onChange, ...rest } = props;
  return <InputStyled placeholder={placeholder} id={id} name={name} type={type} value={value} onChange={onChange} {...rest} />;
};

export default Input;
