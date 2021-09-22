import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CTABtn } from '../../../globalSyles';
import { Container, Content, Text, Overline } from './styles';
import data from '../../../data.json';

const Hero = () => {
  // const [newProduct, setNewProduct] = useState(null);

  // useEffect(() => {
  //   const prod = data.find((item) => item.new === true);
  //   setNewProduct(prod);
  //   console.log(prod);
  // }, []);

  return (
    <Container>
      <Content>
        <Text>
          <Overline>new product</Overline>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <CTABtn>
            <Link to='/'>See Product</Link>
          </CTABtn>
        </Text>
      </Content>
    </Container>
  );
};

export default Hero;
