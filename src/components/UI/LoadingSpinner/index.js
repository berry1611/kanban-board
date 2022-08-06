import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Container } from './LoadingSpinnerStyled';

const LoadingSpinner = () => {
  return (
    <Container>
      <Oval />
    </Container>
  );
};

export default LoadingSpinner;
