import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import BackButton from '../components/common/BackButton';
import SingleProduct from '../components/common/SingleProduct';
import Features from '../components/ProductComponents/Features';
import ProductImages from '../components/ProductComponents/ProductImages';
import Likes from '../components/ProductComponents/Likes';
import Categories from '../components/common/Categories';
import Article from '../components/common/Article';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const tempProd = data.find((item) => item.id === parseInt(id));
    setProduct(tempProd);
  }, [id, data]);

  return (
    <div>
      {!product ? (
        <div>loading</div>
      ) : (
        <>
          <SingleProduct product={product} />
          <Features product={product} />
          <ProductImages product={product} />
          <Likes product={product} />
          <Categories />
          <Article />
        </>
      )}
    </div>
  );
};

export default Product;
