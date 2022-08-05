import styled from '@emotion/styled';
import { marginStyle, paddingStyle } from 'styles/paddingMarginStyle';

export const Container = styled.div`
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
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

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  ${marginStyle};
  ${paddingStyle};
`;
