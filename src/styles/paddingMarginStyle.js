import { css } from '@emotion/react';

const marginStyle = (props) => {
  if (props.margin) {
    return css`
      margin: ${props.margin}px;
    `;
  } else if (props.marginX) {
    return css`
      margin: 0 ${props.marginX}px;
    `;
  } else if (props.marginY) {
    return css`
      margin: ${props.marginY}px 0;
    `;
  } else if (props.marginTop || props.marginBottom || props.marginLeft || props.marginRight) {
    return css`
      margin-left: ${props.marginLeft}px;
      margin-right: ${props.marginRight}px;
      margin-top: ${props.marginTop}px;
      margin-bottom: ${props.marginBottom}px;
    `;
  } else {
    return css`
      margin: 0;
    `;
  }
};

const paddingStyle = (props) => {
  if (props.padding) {
    return css`
      padding: ${props.padding}px;
    `;
  } else if (props.paddingX && props.paddingY) {
    return css`
      padding: ${props.paddingY}px ${props.paddingX}px;
    `;
  } else if (props.paddingX) {
    return css`
      padding: 0 ${props.paddingX}px;
    `;
  } else if (props.paddingY) {
    return css`
      padding: ${props.paddingY}px 0;
    `;
  } else if (props.paddingTop || props.paddingBottom || props.paddingLeft || props.paddingRight) {
    return css`
      padding-left: ${props.paddingLeft}px;
      padding-right: ${props.paddingRight}px;
      padding-top: ${props.paddingTop}px;
      padding-bottom: ${props.paddingBottom}px;
    `;
  }
};

export { marginStyle, paddingStyle };
