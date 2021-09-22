import React, { useEffect, useState } from 'react';
import Title from '../components/common/Title';
import Categories from '../components/common/Categories';
import Article from '../components/common/Article';
import data from '../data.json';
import ProductList from '../components/common/ProductList';

const Headphones = () => {
  const [headphones, setHeadphones] = useState([]);

  useEffect(() => {
    const tempHead = data.filter((item) => item.category === 'headphones');
    setHeadphones(tempHead);
  }, [data]);

  return (
    <div>
      <Title title={'headphones'} />
      <ProductList products={headphones} />
      <Categories />
      <Article />
    </div>
  );
};

export default Headphones;
