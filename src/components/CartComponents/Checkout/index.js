import React, { useState } from 'react';
import InputText from '../../common/InputText';
import {
  Billing,
  Cash,
  Content,
  Heading,
  Payment,
  PaymentChoice,
  Shipping,
} from './styles';

const Checkout = () => {
  const [isCash, setIsCash] = useState(false);

  return (
    <Content>
      <h3>Checkout</h3>

      <Billing>
        <Heading>Billing Details</Heading>
        <div className='details'>
          <InputText name='name' placeholder='Alexei Ward' />
          <InputText name='email address' placeholder='alexei@mail.com' />
          <InputText
            name='phone number'
            placeholder='+1 202-555-0136'
            isNumber={true}
          />
        </div>
      </Billing>

      <Shipping>
        <Heading>Shipping Info</Heading>
        <div className='details'>
          <InputText
            className='address'
            name='address'
            placeholder='1137 Williams Avenue'
          />
          <InputText name='ZIP Code' placeholder='10001' isNumber={true} />
          <InputText name='city' placeholder='New York' />
          <InputText name='country' placeholder='United States' />
        </div>
      </Shipping>

      <Payment>
        <Heading>Paymentg Details</Heading>
        <div className='details'>
          <div>Payment Method</div>

          <div>
            <PaymentChoice onClick={() => setIsCash(true)}>
              e-Money
              <input type='radio' name='payment' />
              <span className='checkmark'></span>
            </PaymentChoice>
            <PaymentChoice onClick={() => setIsCash(false)}>
              Cash on Delivery
              <input type='radio' name='payment' />
              <span className='checkmark'></span>
            </PaymentChoice>
          </div>

          {isCash ? (
            <>
              <InputText
                name='e-Money Number'
                placeholder='238521993'
                isNumber={true}
              />
              <InputText
                name='e-Money PIN'
                placeholder='6891'
                isNumber={true}
              />
            </>
          ) : (
            <Cash>
              <img src='' alt='' />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </Cash>
          )}
        </div>
      </Payment>
    </Content>
  );
};

export default Checkout;
