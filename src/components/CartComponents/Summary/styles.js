import styled from 'styled-components';

export const Content = styled.div`
  /* height: 612px; */

  padding: 32px 24px;
  background-color: #ffffff;
  border-radius: 8px;

  @media (min-width: 640px) {
    padding: 32px;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }

  h6 {
    margin-bottom: 32px;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
  /* justify-content: space-between; */

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

export const Continue = styled.button`
  cursor: pointer;
  width: 100%;
  background-color: #d87d4a;
  padding: 0px;
  border: none;
  padding: 15px 0px;

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
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  span:first-child {
    font-weight: bold;
    font-size: 15px;
    line-height: 25px;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
  }

  span:last-child {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Total = styled(Amount)`
  margin-top: 24px;
  margin-bottom: 32px;
  span:last-child {
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #d87d4a;
  }
`;
