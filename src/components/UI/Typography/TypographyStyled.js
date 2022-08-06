import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'constant';

const colorSelector = ({ color }) => {
  if (color === 'primary') {
    return css`
      color: ${colors.primary.main};
    `;
  } else if (color === 'secondary') {
    return css`
      color: ${colors.secondary.pressed};
    `;
  } else if (color === 'danger') {
    return css`
      color: ${colors.danger.main};
    `;
  } else if (color === 'success') {
    return css`
      color: ${colors.success.main};
    `;
  } else {
    return css`
      color: ${color};
    `;
  }
};

export const TypographyStyled = styled.p`
  font-family: ${(props) => props.fontFamily || 'Nunito Sans'};
  font-size: ${(props) => `${props.fontSize || 12}px`};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  line-height: ${(props) => `${props.lineHeight || 20}px`};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  background-color: ${(props) => props.bgcolor};

  ${colorSelector};
`;
