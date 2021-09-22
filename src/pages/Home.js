import React from 'react';
import Hero from '../components/HomeComponents/Hero';
import Categories from '../components/common/Categories';
import Featured from '../components/HomeComponents/Featured';
import Article from '../components/common/Article';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Featured />
      <Article home={true} />
    </div>
  );
};

export default Home;
