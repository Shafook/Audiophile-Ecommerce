import React, { useEffect, useState } from 'react';
import Article from '../components/common/Article';
import Categories from '../components/common/Categories';
import ProductList from '../components/common/ProductList';
import Title from '../components/common/Title';
import data from '../data.json';

const Earphones = () => {
  const [earphones, setEarphones] = useState([]);

  useEffect(() => {
    const tempEar = data.filter((item) => item.category === 'earphones');

    setEarphones(tempEar);
  }, [data]);

  return (
    <div>
      <Title title={'earphones'} />
      <ProductList products={earphones} />
      <Categories />
      <Article />
    </div>
  );
};

export default Earphones;
