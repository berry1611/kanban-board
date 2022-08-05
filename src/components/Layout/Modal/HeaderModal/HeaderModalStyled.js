import styled from '@emotion/styled';

export const Container = styled.div`
  display: ${(props) => props.display || 'flex'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  flex-grow: ${(props) => props.flexGrow};
  position: ${(props) => props.position || 'relative'};
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-top-right-radius: ${(props) => props.borderTopRightRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  padding: ${(props) => props.padding};
  left: 0;
  right: 0;
  top: 0;
  background-color: white;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.divider ? '1px solid #e0e0e0' : 'none')};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
