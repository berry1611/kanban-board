import styled from '@emotion/styled';
import { colors } from 'constant';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  padding: ${(props) => props.padding || '16px'};
  margin: ${(props) => props.margin};
  align-self: stretch;
`;

export const Divider = styled.hr`
  border-top: 1px dashed #e0e0e0;
  border-bottom: 0;
  border-left: 0;
  border-right: 0;
  width: 100%;
  margin: 0;
`;

export const ProgressBarBG = styled.div`
  height: 16px;
  position: relative;
  width: 100%;
  border-radius: 20px;
  background-color: #ededed;
  margin-right: 12px;
`;

export const ProgressBar = styled.div`
  height: 16px;
  position: relative;
  width: ${(props) => props.width || 0};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: ${(props) => (props.complete ? '20px' : 0)};
  border-bottom-right-radius: ${(props) => (props.complete ? '20px' : 0)};
  background-color: ${(props) => (props.complete ? colors.success.main : colors.primary.main)};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
