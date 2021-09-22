import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0e0e0e;
  padding: 0px 24px;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }
  margin-bottom: 40px;

  @media (min-width: 640px) {
    margin-bottom: 96px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 120px;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  height: 510px;
  padding-top: 108px;

  display: flex;
  justify-content: center;
  text-align: center;

  background: radial-gradient(circle, transparent 40%, #0e0e0e 75%),
    linear-gradient(to right, #0e0e0e, #0e0e0e),
    url('/assets/home/tablet/image-header.jpg');
  background-position: center -60px;
  background-size: cover;
  background-blend-mode: normal, saturation, normal;

  @media (min-width: 640px) {
    height: 640px;
    padding-top: 126px;
    background: radial-gradient(circle, transparent 25%, #0e0e0e 65%),
      linear-gradient(to right, #0e0e0e, #0e0e0e),
      url('/assets/home/tablet/image-header.jpg');
    background-position: center -100px;
    background-size: 120%;
  }

  @media (min-width: 1024px) {
    justify-content: start;
    text-align: start;
    height: 632px;
    padding-top: 128px;
    background: radial-gradient(circle, transparent 40%, #0e0e0e 75%),
      linear-gradient(to right, #0e0e0e, #0e0e0e),
      url('/assets/home/desktop/image-hero.jpg');
    background-position: center -60px;
    background-size: cover;
    background-blend-mode: normal, saturation, normal;
  }
`;

export const Text = styled.div`
  max-width: 328px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 1);

  @media (min-width: 1024px) {
    display: block;
    max-width: 398px;
  }

  h1 {
    margin-bottom: 24px;

    @media (max-width: 640px) {
      font-weight: bold;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: 1.28571px;
    }
  }

  p {
    color: #ffffff;
    opacity: 0.75;
    max-width: 349px;
    font-weight: 200;
    line-height: 25px;
    margin-bottom: 40px;
  }
`;

export const Overline = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  line-height: 19px;
  letter-spacing: 10px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
`;
