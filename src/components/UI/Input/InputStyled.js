import styled from '@emotion/styled';
import { marginStyle, paddingStyle } from 'styles/paddingMarginStyle';

export const InputStyled = styled.input`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 2px solid #ededed;
  border-radius: 8px;
  flex-grow: 1;
  box-sizing: border-box;
  width: ${(props) => props.width || '100%'};

  ${paddingStyle};
  ${marginStyle};
`;
