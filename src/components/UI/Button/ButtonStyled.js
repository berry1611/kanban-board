import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
  display: ${(props) => props.display || 'block'};
  align-items: ${(props) => props.alignItems};
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #1d1f20;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
