import React from 'react';
import { Container, Content, Image, Texts } from './styles';

const Article = ({ home }) => {
  return (
    <Container home={home}>
      <Content>
        <Texts>
          <div>
            <h2>
              Bringing you the <span>best</span> audio gear
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </Texts>
        <Image></Image>
      </Content>
    </Container>
  );
};

export default Article;
