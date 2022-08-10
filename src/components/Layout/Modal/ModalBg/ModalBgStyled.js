import styled from '@emotion/styled';

export const Container = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`;
