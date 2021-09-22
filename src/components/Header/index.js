import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Nav,
  Logo,
  Links,
  HamburgerBtn,
  Menu,
  Overlay,
} from './styles';
import Categories from '../common/Categories';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);

    document.body.classList.toggle('no-scroll');
  };

  return (
    <Container>
      <Nav>
        <HamburgerBtn onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerBtn>
        <Logo>
          <Link to='/'>
            <img src='\assets\shared\desktop\logo.svg' alt='logo' />
          </Link>
        </Logo>
        <Links>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/headphones'>Headphones</Link>
          </li>
          <li>
            <Link to='/speakers'>Speakers</Link>
          </li>
          <li>
            <Link to='/earphones'>Earphones</Link>
          </li>
        </Links>
        <Link to='/checkout'>
          <img src='\assets\shared\desktop\icon-cart.svg' alt='cart' />
        </Link>
      </Nav>
      {menu && (
        <>
          <Menu>
            <Categories menu={menu} />
          </Menu>
          <Overlay></Overlay>
        </>
      )}
    </Container>
  );
};

export default Header;
