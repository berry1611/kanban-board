import styled from '@emotion/styled';
import { colors } from 'constant';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  gap: 24px;
  width: 20%;
`;

export const ContainerBG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${colors.primary.main};
  font-weight: bold;
  font-size: 12px;
`;
