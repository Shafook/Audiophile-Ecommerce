import React from 'react';
import ProductCard from '../ProductCard';
import { Container } from './styles';

const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map((item, index) => {
        if ((index + 1) / 2 === 1) {
          return <ProductCard key={index} product={item} />;
        } else {
          return <ProductCard key={index} isLeft={true} product={item} />;
        }
      })}
    </Container>
  );
};

export default ProductList;
