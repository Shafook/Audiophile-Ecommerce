import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectGrandTotal,
  setOrderModal,
} from '../../../features/cart/cartSlice';
import { Amount, Content, Continue, Item, Middle, Total } from './styles';

const Summary = () => {
  const cartItems = useSelector(selectCartItems);
  const grandTotal = useSelector(selectGrandTotal);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (cartItems.length === 0) return;

    dispatch(setOrderModal(true));
  };

  return (
    <Content>
      <h6>summary</h6>

      <div>
        {cartItems.map((item) => {
          const { id, name, amount, price, image } = item;
          return (
            <Item key={id}>
              <img src={image.desktop} alt={name} />
              <Middle>
                <span>{name}</span>
                <span>$ {price}</span>
              </Middle>
              <span className='amount'>x{amount}</span>
            </Item>
          );
        })}
      </div>

      <Amount>
        <span>total</span>
        <span>$ {grandTotal.total}</span>
      </Amount>
      <Amount>
        <span>shipping</span>
        <span>$ {grandTotal.shipping}</span>
      </Amount>
      <Amount>
        <span>vat (included)</span>
        <span>$ {grandTotal.vat}</span>
      </Amount>
      <Total>
        <span>garnd total</span>
        <span>${grandTotal.grandTotal}</span>
      </Total>

      <Continue onClick={handleClick}>continue</Continue>
    </Content>
  );
};

export default Summary;
