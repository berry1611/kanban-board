import styled from '@emotion/styled';
import { colors } from 'constant';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  &:hover {
    color: ${(props) => (props.delete ? `${colors.danger.main}` : `${colors.primary.main}`)};
  }
`;
