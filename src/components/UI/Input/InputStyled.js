import styled from '@emotion/styled';

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
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
`;
