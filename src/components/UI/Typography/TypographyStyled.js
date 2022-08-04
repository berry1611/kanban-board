import styled from '@emotion/styled';

export const TypographyStyled = styled.p`
  font-family: 'Nunito Sans';
  font-size: ${(props) => `${props.fontSize}px` || '12px'};
  font-weight: ${(props) => props.fontWeight || 400};
  line-height: 20px;
  color: ${(props) => props.color || 'black'};
  padding: 0;
  margin: 0;
`;
