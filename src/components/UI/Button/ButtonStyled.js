import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { marginStyle, paddingStyle } from 'styles/paddingMarginStyle';
import { colors } from 'constant';

const colorSelector = ({ color }) => {
  if (color === 'primary') {
    return css`
      color: white;
      background-color: ${colors.primary.main};
    `;
  } else if (color === 'secondary') {
    return css`
      color: white;
      background-color: ${colors.secondary.border};
    `;
  } else if (color === 'danger') {
    return css`
      color: white;
      background-color: ${colors.danger.border};
    `;
  } else if (color === 'success') {
    return css`
      color: white;
      background-color: ${colors.success.border};
    `;
  } else {
    return css`
      color: ${color || '#1d1f20'};
      background-color: ${color || 'inherit'};
    `;
  }
};

export const ButtonStyled = styled.button`
  display: ${(props) => props.display || 'block'};
  align-items: ${(props) => props.alignItems};
  font-family: 'Nunito Sans';
  font-size: ${(props) => `${props.fontSize || 12}px`};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  line-height: ${(props) => `${props.lineHeight || 12}px`};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => `${props.borderRadius || 0}px`};
  box-sizing: border-box;
  box-shadow: ${(props) => props.boxShadow};
  cursor: pointer;

  ${colorSelector}
  ${paddingStyle}
  ${marginStyle}
`;
