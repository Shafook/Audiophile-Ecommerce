import React from 'react';
import { Box, Container, Content, Feature } from './styles';

const Features = ({ product }) => {
  return (
    <Container>
      <Content>
        {product && (
          <>
            <Feature>
              <h2>Features</h2>
              <p>{product.features}</p>
            </Feature>
            <Box>
              <h2>in the box</h2>

              <ul>
                {product.includes.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className='number'>${item.quantity}x</span>
                      <span className='itemInBox'>${item.item}</span>
                    </li>
                  );
                })}
              </ul>
            </Box>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Features;
