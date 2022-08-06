import styled from '@emotion/styled';
import { colors } from 'constant';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  padding-top: 20px;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`;

export const Box = styled.div`
  background-color: ${colors.danger.surface};
  padding: 8px 50px;
  border: 1px solid ${colors.danger.border};
  border-radius: 4px;
`;
