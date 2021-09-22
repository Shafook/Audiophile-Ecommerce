import React, { useEffect, useState } from 'react';
import Article from '../components/common/Article';
import Categories from '../components/common/Categories';
import Title from '../components/common/Title';
import ProductList from '../components/common/ProductList';
import data from '../data.json';

const Speakers = () => {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const tempSpeak = data.filter((item) => item.category === 'speakers');

    setSpeakers(tempSpeak);
  }, [data]);
  return (
    <div>
      <Title title={'Speakers'} />
      <ProductList products={speakers} />
      <Categories />
      <Article />
    </div>
  );
};

export default Speakers;
