import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 420px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
  padding: 24px;
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
`;

export const ModalBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
`;
