import styled from '@emotion/styled';
import { colors } from 'constant';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  align-items: flex-start;
  background-color: #ffffff;
  gap: 12px;
  padding: 8px 22px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  width: 320px;
`;

export const ListItem = styled.button`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 22px;
  background-color: inherit;
  border: none;
  font-family: 'Nunito Sans';
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.2px;
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.delete ? `${colors.danger.main}` : `${colors.primary.main}`)};
  }
`;

export const InvisBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: ${(props) => props.top};
  padding-left: ${(props) => props.left};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  box-sizing: border-box;
`;
