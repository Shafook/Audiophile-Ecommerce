import React from 'react';
import { Container } from './styles';

const Title = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default Title;
