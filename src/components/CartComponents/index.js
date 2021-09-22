import React from 'react';
import { Container, Content } from './styles';
import Checkout from './Checkout';
import Summary from './Summary';
import BackButton from '../common/BackButton';
import OrderModal from '../common/OrderModal';
import { useSelector } from 'react-redux';
import { selectOrderModal } from '../../features/cart/cartSlice';

const CartComponents = () => {
  const orderModal = useSelector(selectOrderModal);

  return (
    <Container>
      {orderModal && <OrderModal />}
      <BackButton />
      <Content>
        <Checkout />
        <Summary />
      </Content>
    </Container>
  );
};

export default CartComponents;
