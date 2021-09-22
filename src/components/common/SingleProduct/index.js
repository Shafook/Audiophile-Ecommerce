import React, { useEffect, useState } from 'react';
import { CTABtn } from '../../../globalSyles';
import {
  AddCart,
  Container,
  Content,
  Image,
  ItemAmount,
  Overline,
  Text,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartModal,
  setCart,
  setCartModal,
} from '../../../features/cart/cartSlice';
import CartModal from '../CartModal';
import BackButton from '../BackButton';

const SingleProduct = ({ product }) => {
  const [amount, setAmount] = useState(1);

  const openModal = useSelector(selectCartModal);

  const dispatch = useDispatch();

  useEffect(() => {
    setAmount(1);
  }, [product]);

  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    if (amount > 1) setAmount(amount - 1);
  };

  const addItem = (id, name, amount, price, image) => {
    dispatch(
      setCart({
        item: {
          id: id,
          name: name,
          amount: amount,
          price: price,
          image: image,
        },
      })
    );

    dispatch(setCartModal(true));
  };

  return (
    <Container>
      {openModal && <CartModal />}
      <BackButton />
      <Content>
        {!product ? (
          <div>Loading</div>
        ) : (
          <>
            <Image image={product?.image}></Image>
            <Text>
              <div>
                <Overline>new product</Overline>
                <h2>{product?.name}</h2>
                <p>{product?.description}</p>
                <h6>${product?.price}</h6>
                <AddCart>
                  <ItemAmount>
                    <span className='value' onClick={decrement}>
                      -
                    </span>
                    <span>{amount}</span>
                    <span className='value' onClick={increment}>
                      +
                    </span>
                  </ItemAmount>
                  <CTABtn
                    onClick={() =>
                      addItem(
                        product?.id,
                        product?.name,
                        amount,
                        product?.price,
                        product?.image
                      )
                    }
                  >
                    <a>Add Amount</a>
                  </CTABtn>
                </AddCart>
              </div>
            </Text>
          </>
        )}
      </Content>
    </Container>
  );
};

export default SingleProduct;
