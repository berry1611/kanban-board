import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from 'constant';

const colorSelector = ({ color }) => {
  if (color === 'primary') {
    return css`
      border: 1px solid ${colors.primary.main};
      background-color: ${colors.primary.surface};
    `;
  } else if (color === 'secondary') {
    return css`
      border: 1px solid ${colors.secondary.border};
      background-color: ${colors.secondary.surface};
    `;
  } else if (color === 'danger') {
    return css`
      border: 1px solid ${colors.danger.border};
      background-color: ${colors.danger.surface};
    `;
  } else if (color === 'success') {
    return css`
      border: 1px solid ${colors.success.border};
      background-color: ${colors.success.surface};
    `;
  } else {
    return css`
      border: 1px solid ${colors.primary.main};
      background-color: ${colors.primary.surface};
    `;
  }
};

export const Board = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  border-radius: 4px;
  gap: 8px;
  flex-grow: 1;
  align-self: baseline;

  ${colorSelector};
`;

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 4px;
  padding: 2px 8px;

  ${colorSelector}
`;
