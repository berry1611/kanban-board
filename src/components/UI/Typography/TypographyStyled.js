import styled from '@emotion/styled';
import { colors } from 'constant';
import { marginStyle, paddingStyle } from 'styles/paddingMarginStyle';

export const TypographyStyled = styled.p`
  font-family: ${(props) => props.fontFamily || 'Nunito Sans'};
  font-size: ${(props) => `${props.fontSize || 12}px`};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  line-height: ${(props) => `${props.lineHeight || 20}px`};
  color: ${(props) => props.color || colors.default};
  padding: 0;
  margin: 0;

  ${paddingStyle};
  ${marginStyle};
`;
