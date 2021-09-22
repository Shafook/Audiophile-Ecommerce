import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CTABtn } from '../../../globalSyles';
import { Container, Content, Image, ProductCard, ProductItems } from './styes';
import data from '../../../data.json';

const Likes = ({ product }) => {
  const { others: images } = product;
  const history = useHistory();

  const getId = (slug) => {
    const item = data.find((item) => item.slug === slug);
    return item.id;
  };

  return (
    <Container>
      <Content>
        <h3>you may also like</h3>

        <ProductItems>
          {images.map((item, index) => {
            const { image, name, slug } = item;
            const id = getId(slug);
            return (
              <ProductCard key={index}>
                <Image image={image}></Image>
                <h5>{name}</h5>
                <CTABtn>
                  <Link to={`/${id}`}>see product</Link>
                </CTABtn>
              </ProductCard>
            );
          })}
        </ProductItems>
      </Content>
    </Container>
  );
};

export default Likes;
