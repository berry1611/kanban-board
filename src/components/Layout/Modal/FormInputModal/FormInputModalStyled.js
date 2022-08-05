import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  width: 420px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  left: 490px;
  top: 295px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  gap: 8px;
`;

export const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 24px;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
`;
