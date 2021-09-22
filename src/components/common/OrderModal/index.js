import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectGrandTotal,
  setOrderModal,
} from '../../../features/cart/cartSlice';
import {
  Check,
  Checkout,
  Container,
  Header,
  Item,
  Items,
  List,
  Middle,
  Modal,
  Order,
  SubHeader,
  Total,
} from './styles';

const OrderModal = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectGrandTotal);
  const cartEl = useRef(null);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    setOrderItems([...[], cartItems[0]]);
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, [cartItems]);

  useEffect(() => {
    if (show === true) {
      setOrderItems([...cartItems]);
    } else {
      setOrderItems([...[], cartItems[0]]);
    }
    console.log(cartItems);
  }, [show]);

  const handleClick = (e) => {
    if (cartEl.current && cartEl.current.contains(e.target)) {
      return;
    }

    dispatch(setOrderModal(false));
    setShow(false);
  };

  return (
    <Container>
      <Modal ref={cartEl}>
        <Check></Check>
        <Header>
          <h4>thank you for your order</h4>
        </Header>

        <SubHeader>You will receive an email confirmation shortly.</SubHeader>

        <Order>
          <Items>
            <List>
              {orderItems?.map((item) => {
                return (
                  <Item key={item.id}>
                    <img src={item.image.desktop} alt={item.name} />
                    <Middle>
                      <span>{item.name}</span>
                      <span>$ {item.price}</span>
                    </Middle>
                    <span className='amount'>x{item.amount}</span>
                  </Item>
                );
              })}
            </List>

            <div onClick={() => setShow(!show)} className='totalItems'>
              {!show ? (
                <div>and {cartItems.length - 1} other item(s)</div>
              ) : (
                <div>View less</div>
              )}
            </div>
          </Items>
          <Total className={show && 'bottom'}>
            <div>GRAND TOTAL</div>
            <div>$ {total.grandTotal}</div>
          </Total>
        </Order>

        <Checkout>
          <Link to='/checkout'>back to home</Link>
        </Checkout>
      </Modal>
    </Container>
  );
};

export default OrderModal;
