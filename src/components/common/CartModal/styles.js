import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  height: calc(100% - 90px);
  padding: 24px;
  z-index: 5;
  @media (min-width: 640px) {
    padding: 0px 40px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.4;
    z-index: -1;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  z-index: 1;

  @media (min-width: 640px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

export const Modal = styled.div`
  padding: 32px;
  /* width: calc(100% - 48px); */
  min-height: 488px;
  background-color: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 640px) {
    width: 377px;
    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    margin-top: 32px;
  }
`;

export const ItemAmount = styled.div`
  width: 96px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 11.5px;

  .amount {
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 1px;
  }

  .value {
    cursor: pointer;
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #000000;
    opacity: 0.25;

    transition: all 150ms ease-in-out;

    &:hover {
      color: #d87d4a;
      opacity: 1;
    }
  }
`;

export const CartItems = styled.div`
  padding: 32px 0px;
  flex: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .remove {
    cursor: pointer;
    text-decoration: underline;
    font-weight: 200;
    font-size: 15px;
    line-height: 25px;

    color: #000000;
    opacity: 0.5;
    transition: all 150ms ease-in-out;

    &:hover {
      color: #d87d4a;
      opacity: 1;
    }
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
  /* justify-content: space-between; */

  img {
    height: 64px;
    margin-right: 16px;
    border-radius: 8px;
  }
`;

export const Middle = styled.div`
  flex: 1;

  span:first-child {
    display: block;
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    text-transform: uppercase;
  }

  span:last-child {
    display: block;
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    opacity: 0.5;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  span:first-child {
    font-weight: 200;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
    text-transform: uppercase;
  }

  span:last-child {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Checkout = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #d87d4a;
  padding: 0px;
  border: none;

  font-family: Manrope;
  font-weight: bold;
  font-size: 13px;
  line-height: 18px;

  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;

  color: #ffffff;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #fbaf85;
  }

  a {
    display: block;
    padding: 15px 0px;
  }
`;

export const Bottom = styled.div``;
