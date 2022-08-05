import styled from '@emotion/styled';
import { paddingStyle } from 'styles/paddingMarginStyle';

export const Container = styled.div`
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  flex-grow: ${(props) => props.flexGrow};
  position: ${(props) => props.position || 'relative'};
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.divider ? '1px solid #e0e0e0' : 'none')};

  ${paddingStyle}
`;
