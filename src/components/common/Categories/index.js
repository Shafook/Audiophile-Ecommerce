import React, { useEffect, useState } from 'react';
import CategoryItem from '../CategoryItem';
import { Container, Category } from './styles';
import data from '../../../data.json';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const tempCategories = [
      {
        category: 'headphones',
        image: '/assets/shared/desktop/image-headphones.png',
        link: '/',
      },
      {
        category: 'speakers',
        image: '/assets/shared/desktop/image-speakers.png',
        link: '/',
      },
      {
        category: 'earphones',
        image: '/assets/shared/desktop/image-earphones.png',
        link: '/',
      },
    ];

    setCategories(tempCategories);
  }, [data]);

  return (
    <Container>
      <Category>
        {categories.map((category, index) => (
          <CategoryItem key={index} {...category} />
        ))}
      </Category>
    </Container>
  );
};

export default Categories;
