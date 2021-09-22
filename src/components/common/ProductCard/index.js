import React from 'react';
import { Link } from 'react-router-dom';
import { CTABtn } from '../../../globalSyles';
import { Content, Image, Overline, Text } from './styles';

const ProductCard = ({ isLeft, product }) => {
  const { description, image, name, new: newProduct, id } = product;
  return (
    <Content>
      <Image isLeft={isLeft} image={image}></Image>
      <Text isLeft={isLeft}>
        <div>
          {newProduct && <Overline>new product</Overline>}
          <h2>{name}</h2>
          <p>{description}</p>
          <CTABtn>
            <Link to={`/${id}`}>See Product</Link>
          </CTABtn>
        </div>
      </Text>
    </Content>
  );
};

export default ProductCard;
