import React from 'react';
import { Link } from 'react-router-dom';
import { CTABtnBlack, CTABtnWhite } from '../../../globalSyles';
import { Container, Content, Image, YX1, ZX7, ZX9 } from './styles';

const Featured = () => {
  return (
    <Container>
      <Content>
        <ZX9>
          <Image>
            <img
              src='/assets/home/desktop/image-speaker-zx9.png'
              alt='speaker'
            />
          </Image>
          <div>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <CTABtnBlack>
              <Link to='/'>see product</Link>
            </CTABtnBlack>
          </div>
        </ZX9>

        <ZX7>
          <div>
            <h4>zx7 speaker</h4>
            <CTABtnWhite>
              <Link to='/'>see product</Link>
            </CTABtnWhite>
          </div>
        </ZX7>

        <YX1>
          <div></div>
          <div>
            <div>
              <h4>yx1 earphones</h4>
              <CTABtnWhite>
                <Link to='/'>see product</Link>
              </CTABtnWhite>
            </div>
          </div>
        </YX1>
      </Content>
    </Container>
  );
};

export default Featured;
