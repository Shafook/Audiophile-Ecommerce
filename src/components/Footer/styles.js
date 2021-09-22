import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  background-color: #101010;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  position: relative;

  padding-top: 52px;
  padding-bottom: 38px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  @media (min-width: 640px) {
    text-align: start;

    display: grid;
    gap: 0px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr) 105px;
    height: 400px;
    padding-top: 60px;
    padding-bottom: 45px;
  }

  @media (min-width: 1024px) {
    height: 365px;
    padding-top: 75px;
    padding-bottom: 48px;
    grid-template-rows: repeat(3, 1fr);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 101px;
    height: 4px;
    background-color: #d87d4a;

    @media (min-width: 640px) {
      left: 0%;
      transform: translateX(0%);
    }
  }

  p {
    font-weight: 200;
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    opacity: 0.5;

    @media (min-width: 640px) {
      grid-column: 1 / span 2;
      grid-row: 3;
    }

    @media (min-width: 1024px) {
      grid-column: 1;
      grid-row: 2;
    }
  }
`;

export const Logo = styled.div`
  /* align-self: center; */

  @media (min-width: 640px) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  @media (min-width: 1024px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* flex-wrap: wrap; */
  gap: 16px;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 25px;
  letter-spacing: 1px;

  @media (min-width: 640px) {
    grid-column: 1 / span 2;
    grid-row: 2;
    justify-self: start;

    flex-direction: row;
    align-items: flex-start;
    gap: 34px;
  }

  @media (min-width: 1024px) {
    justify-self: end;
    grid-column: 2;
    grid-row: 1;
  }

  li a {
    transition: color 150ms ease-in-out;
    font-weight: 700;
  }

  li:hover a {
    color: #d87d4a;
  }
`;

export const Social = styled.ul`
  display: flex;
  gap: 16px;
  order: 5;

  @media (min-width: 640px) {
    justify-self: end;
    grid-column: 2;
    grid-row: 4 / span 1;
    align-self: flex-end;
    order: 4;
  }

  @media (min-width: 1024px) {
    grid-row: 2 / span 2;
    align-self: center;
  }

  li {
    svg {
      path {
        transition: all 150ms ease-in-out;
      }
    }

    &:hover {
      svg {
        path {
          fill: #d87d4a;
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  color: #ffffff;
  opacity: 0.5;
  order: 4;

  @media (min-width: 640px) {
    align-self: flex-end;
    grid-column: 1;
    grid-row: 4 / span 1;
    order: 5;
  }

  @media (min-width: 1024px) {
    grid-column: 1;
    grid-row: 3;
  }
`;
