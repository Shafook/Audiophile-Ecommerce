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

export const Modal = styled.div`
  margin: 0 auto;
  padding: 32px;
  /* min-height: 488px; */
  background-color: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 640px) {
    width: 540px;
    padding: 48px;

    margin-top: 24px;
  }

  @media (min-width: 1024px) {
    margin-top: 32px;
  }
`;

export const Check = styled.div`
  width: 64px;
  height: 64px;
  background-color: #d87d4a;
  border-radius: 50%;
  margin-bottom: 23px;

  @media (min-width: 640px) {
    margin-bottom: 33px;
  }
`;

export const Header = styled.div`
  margin-bottom: 16px;
  width: 284px;

  @media (min-width: 640px) {
    margin-bottom: 24px;
  }
`;

export const SubHeader = styled.div`
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  opacity: 0.5;

  margin-bottom: 24px;

  @media (min-width: 640px) {
    margin-bottom: 33px;
  }
`;

export const Order = styled.div`
  /* height: 144px; */
  display: flex;
  flex-direction: column;

  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
    margin-bottom: 46px;
  }

  > div {
    flex: 1;
  }
`;

export const Items = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  padding: 24px;

  .totalItems {
    cursor: pointer;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.214286px;
    text-align: center;
    opacity: 0.5;
  }
`;

export const List = styled.div`
  position: relative;
  margin-bottom: 12px;

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0%;

    width: 100%;
    height: 2px;
    background: #000000;
    opacity: 0.08;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 12px;

  img {
    height: 64px;
    margin-right: 16px;
    border-radius: 8px;
  }

  .amount {
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    opacity: 0.5;
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
  background-color: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 0px 29px 24px;

  @media (min-width: 640px) {
    padding: 0px;
    padding-left: 24px;
  }

  &.bottom {
    justify-content: flex-end;
    padding-bottom: 41px;
  }

  > div {
  }

  div:first-child {
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;

    opacity: 0.5;
    margin-bottom: 8px;
  }

  div:last-child {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-transform: uppercase;
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
