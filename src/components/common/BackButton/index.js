import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container } from './styles';

const BackButton = () => {
  const history = useHistory();
  return (
    <Container>
      <Button onClick={() => history.goBack()}> go back</Button>
    </Container>
  );
};

export default BackButton;
