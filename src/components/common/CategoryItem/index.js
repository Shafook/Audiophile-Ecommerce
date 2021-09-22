import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Item, ProductImage } from './styles';

const CategoryItem = ({ category, image }) => {
  return (
    <Item>
      <ProductImage>
        <img src={image} alt={category} />
      </ProductImage>
      <Link to={category}>
        <Card>
          <div>
            <h6>{category}</h6>
            <div>
              <span>shop</span>
              <img
                src='\assets\shared\desktop\icon-arrow-right.svg'
                alt='arrow'
              />
            </div>
          </div>
        </Card>
      </Link>
    </Item>
  );
};

export default CategoryItem;
