import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #0e0e0e; */
  background-color: #000000;
  padding: 0px 24px;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }
`;

export const Nav = styled.div`
  position: relative;
  max-width: 1110px;
  height: 90px;
  margin: 0 auto;
  /* padding-top: 32px;
  padding-bottom: 36px; */
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 100%, 20%);
`;

export const Logo = styled.div`
  @media (min-width: 640px) {
    flex: 1;
    padding-left: 42px;
  }

  @media (min-width: 1024px) {
    flex: unset;
    padding: 0;
  }

  img {
    width: 143px;
    height: 25px;
  }
`;

export const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 34px;
  font-size: 13px;
  text-transform: uppercase;
  line-height: 25px;
  letter-spacing: 1px;

  display: none;

  li a {
    transition: color 150ms ease-in-out;
  }

  li:hover a {
    color: #d87d4a;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const HamburgerBtn = styled.div`
  width: 16px;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    background-color: #ffffff;

    &:not(:last-child) {
      margin-bottom: 3px;
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Menu = styled.div`
  background-color: #ffffff;
  padding-top: 56px;
  padding-bottom: 67px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  position: absolute;
  top: 90px;
  left: 0;
  width: 100%;
  z-index: 3;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 90px;
  left: 0;

  width: 100%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.4;
  z-index: 2;

  @media (min-width: 1024px) {
    display: none;
  }
`;
