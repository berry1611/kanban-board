import styled from '@emotion/styled';
import { css } from '@emotion/react';
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
      background-color: ${colors.danger.main};
    `;
  } else if (color === 'success') {
    return css`
      color: white;
      background-color: ${colors.success.main};
    `;
  } else {
    return css`
      color: ${color || '#1d1f20'};
      background-color: ${color || 'inherit'};
    `;
  }
};

export const ButtonStyled = styled.button`
  font-family: 'Nunito Sans';
  box-sizing: border-box;
  cursor: pointer;
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  gap: ${(props) => props.gap || '4px'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  font-size: ${(props) => `${props.fontSize || 12}px`};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  line-height: ${(props) => `${props.lineHeight || 12}px`};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => `${props.borderRadius || 0}px`};
  padding: ${(props) => props.padding || 0};
  margin: ${(props) => props.margin || 0};
  box-shadow: ${(props) => props.boxShadow};
  width: ${(props) => props.width};

  ${colorSelector};
`;
