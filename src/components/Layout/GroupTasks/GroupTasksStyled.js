import styled from '@emotion/styled';
import { breakPoint } from 'constant';

const paddingSize = 24;

const gridColumnSizeXl = ((window.innerWidth - paddingSize * 2) / 4 / window.innerWidth) * 100;
const gridColumnSizeLg = ((window.innerWidth - paddingSize * 2) / 3 / window.innerWidth) * 100;
const gridColumnSizeMd = ((window.innerWidth - paddingSize * 2) / 2 / window.innerWidth) * 100;

export const GridContainer = styled.div`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: ${gridColumnSizeXl}% ${gridColumnSizeXl}% ${gridColumnSizeXl}% ${gridColumnSizeXl}%;
  padding: ${paddingSize}px;
  gap: 16px;
  @media (max-width: ${`${breakPoint.lg}px`}) {
    grid-template-columns: ${gridColumnSizeLg}% ${gridColumnSizeLg}% ${gridColumnSizeLg}%;
  }
  @media (max-width: ${`${breakPoint.md}px`}) {
    grid-template-columns: ${gridColumnSizeMd}% ${gridColumnSizeMd}%;
  }
  @media (max-width: ${`${breakPoint.sm}px`}) {
    grid-template-columns: auto;
  }
`;
