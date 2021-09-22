import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html{
    font-size: 100%;
    box-sizing: border-box;
}

*, *::before, *::after{
    box-sizing: inherit;
}

body{
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    color: #000000;
    font-family: 'Manrope', sans-serif;

    @media (max-width: 1024px) {
      &.no-scroll{
      overflow-y: hidden;
    }
  }
    
}

h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

h1{
    font-size: 56px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 58px;
    letter-spacing: 2px;
}

h2{
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 44px;
    letter-spacing: 1.5px;
}

h3{
    font-size: 32px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 36px;    
    letter-spacing: 2px;
}

h4{
    font-size: 28px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 38px;
    letter-spacing: 2px;
}

h5{
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 33px;
    letter-spacing: 1.7px;
}

h6{
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 1.7px;
    color: #000000;

}

p{
  margin: 0;
  padding: 0;
  font-weight: 700;
font-size: 15px;
line-height: 25px;
opacity: 0.5;
}

ul, li, a {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    font-family: 'Manrope', sans-serif;

}

.sub-title{
    font-size: 13px;
    text-transform: uppercase;
    line-height: 25px;
    letter-spacing: 1px;
}

.container{
  padding: 0px 24px;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }
}
`;

export const CTABtn = styled.div`
  width: 160px;
  display: inline-block;
  background-color: #d87d4a;
  font-size: 13px;
  letter-spacing: 1px;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  text-align: center;

  a {
    display: block;
    padding: 15px 0px;
    outline: none;
    border: none;
    color: rgba(255, 255, 255, 1);
    text-transform: uppercase;
    transition: all 150ms ease-in-out;
  }

  &:hover {
    background-color: #fbaf85;
  }
`;

export const CTABtnWhite = styled(CTABtn)`
  background-color: transparent;
  border: 1px solid #000000;

  a {
    color: #000000;
  }

  &:hover {
    background-color: #000000;

    a {
      color: #ffffff;
    }
  }
`;

export const CTABtnBlack = styled(CTABtn)`
  background-color: #000000;

  a {
    color: #ffffff;
  }

  &:hover {
    background-color: #4c4c4c;
  }
`;
