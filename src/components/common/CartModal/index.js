import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeAll,
  selectCartItems,
  selectGrandTotal,
  selectTotal,
  setAmount,
  setCartModal,
} from '../../../features/cart/cartSlice';
import {
  Bottom,
  CartItems,
  Checkout,
  Container,
  Content,
  Header,
  Item,
  ItemAmount,
  Middle,
  Modal,
  Total,
} from './styles';

const CartModal = () => {
  const cartEl = useRef(null);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotal);

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  const handleClick = (e) => {
    if (cartEl.current && cartEl.current.contains(e.target)) {
      return;
    }

    dispatch(setCartModal(false));
  };

  const increment = (id) => {
    dispatch(
      setAmount({
        id: id,
        amount: 1,
      })
    );
  };

  const decrement = (id) => {
    dispatch(
      setAmount({
        id: id,
        amount: -1,
      })
    );
  };

  const removeAllItems = () => {
    dispatch(removeAll());
  };

  return (
    <Container>
      <Content>
        <Modal ref={cartEl}>
          <Header>
            <h6>
              cart (<span>{cartItems.length}</span>)
            </h6>
            <span className='remove' onClick={removeAllItems}>
              Remove all
            </span>
          </Header>

          <CartItems>
            {cartItems.map((items) => {
              const { id, name, amount, price, image } = items;
              return (
                <Item key={id}>
                  <img src={image.desktop} alt='product' />
                  <Middle>
                    <span>{name}</span>
                    <span>${price}</span>
                  </Middle>
                  <ItemAmount>
                    <span className='value' onClick={() => decrement(id)}>
                      -
                    </span>
                    <span className='amount'>{amount}</span>
                    <span className='value' onClick={() => increment(id)}>
                      +
                    </span>
                  </ItemAmount>
                </Item>
              );
            })}
          </CartItems>

          <Bottom>
            <Total>
              <span>total</span>
              <span>${total}</span>
            </Total>
            <Checkout>
              <Link to='/checkout'>checkout</Link>
            </Checkout>
          </Bottom>
        </Modal>
      </Content>
    </Container>
  );
};

export default CartModal;
