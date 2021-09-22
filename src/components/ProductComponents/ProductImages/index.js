import React from 'react';
import { Container, Content, Image } from './styles';

const ProductImages = ({ product }) => {
  const {
    gallery: { first, second, third },
  } = product;

  return (
    <Container>
      <Content>
        <Image image={first}></Image>
        <Image image={second}></Image>
        <Image image={third} className='lg-img'></Image>
      </Content>
    </Container>
  );
};

export default ProductImages;
