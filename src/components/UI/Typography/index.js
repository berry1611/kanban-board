import React from 'react';
import { TypographyStyled } from './TypographyStyled';

const Typography = (props) => {
  const { children, ...rest } = props;
  return <TypographyStyled {...rest}>{children}</TypographyStyled>;
};

export default Typography;
