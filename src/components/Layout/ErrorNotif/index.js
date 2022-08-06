import { Typography } from 'components/UI';
import React from 'react';
import { Box, Container } from './ErrorNotifStyled';

const ErrorNotif = ({ errorMessage }) => {
  return (
    <Container open={Boolean(errorMessage)}>
      <Box>
        <Typography color="danger">{errorMessage}</Typography>
      </Box>
    </Container>
  );
};
export default ErrorNotif;
