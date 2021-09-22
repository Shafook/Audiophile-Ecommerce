import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  margin: 0 auto;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0;
  margin-top: 16px;
  padding: 0;
  background: transparent;
  outline: none;
  border: none;

  font-family: Manrope;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-transform: capitalize;

  color: #000000;

  opacity: 0.5;
  transition: all 150ms ease-in-out;

  &:hover {
    color: #d87d4a;
    opacity: 1;
  }

  /* margin-bottom: 24px; */

  @media (min-width: 640px) {
    margin-top: 33px;
  }

  @media (min-width: 1024px) {
    margin-top: 79px;
    /* margin-bottom: 56px; */
  }
`;
