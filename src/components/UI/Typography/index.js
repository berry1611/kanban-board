import React from 'react';
import { TypographyStyled } from './TypographyStyled';

const Typography = (props) => {
  const { children, color, ...rest } = props;
  return (
    <TypographyStyled color={color} {...rest}>
      {children}
    </TypographyStyled>
  );
};

export default Typography;
