import styled from 'styled-components';

export const Content = styled.div`
  padding: 24px;

  background: #ffffff;
  border-radius: 8px;

  > h3 {
    margin-bottom: 41px;
  }

  @media (min-width: 640px) {
    padding: 30px 27px;
  }

  @media (min-width: 1024px) {
    padding: 48px;
    padding-top: 54px;
  }
`;

export const Billing = styled.div`
  margin-bottom: 32px;
  > .details {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 2fr);
      column-gap: 16px;
      row-gap: 24px;
      margin-bottom: 53px;
    }
  }
`;

export const Heading = styled.div`
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;

  letter-spacing: 0.928571px;
  text-transform: uppercase;

  color: #d87d4a;
  margin-bottom: 16px;
`;

export const Shipping = styled.div`
  margin-bottom: 32px;

  > .details {
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);
      column-gap: 16px;
      row-gap: 24px;
      margin-bottom: 53px;
    }
  }

  .address {
    grid-row: 1;
    grid-column: 1 / span 2;
  }
`;

export const Payment = styled.div`
  .details {
    font-family: Manrope;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: -0.25px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    @media (min-width: 640px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 1.5fr 1fr;
      column-gap: 16px;
      row-gap: 24px;
    }
  }
`;

export const PaymentChoice = styled.label`
  cursor: pointer;
  display: block;
  position: relative;
  padding: 18px 0px;
  padding-left: 52px;
  user-select: none;
  border: 1px solid #cfcfcf;
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:hover {
    border: 1px solid #d87d4a;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    border: 1px solid #cfcfcf;
    border-radius: 50%;
  }

  input:checked ~ .checkmark {
    /* background-color: #d87d4a; */
  }

  input:checked ~ .checkmark::after {
    display: block;
  }

  .checkmark::after {
    content: '';
    position: absolute;
    display: none;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d87d4a;
  }
`;

export const Cash = styled.div`
  grid-column: 1 / span 2;
`;
