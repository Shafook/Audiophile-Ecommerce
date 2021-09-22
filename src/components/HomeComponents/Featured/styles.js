import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 0px 24px;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }

  margin-top: 120px;
  /* margin-bottom: 120px; */

  @media (min-width: 640px) {
    margin-top: 96px;
    /* margin-bottom: 96px; */
  }

  @media (min-width: 1024px) {
    margin-top: 168px;
    /* margin-bottom: 200px; */
  }
`;

export const Content = styled.section`
  max-width: 1110px;
  margin: 0 auto;
`;

export const ZX9 = styled.article`
  position: relative;

  background-color: #d87d4a;
  border-radius: 8px;
  background-image: url('/assets/home/desktop/pattern-circles.svg');
  background-repeat: no-repeat;
  background-position: center -155px;
  background-size: cover;
  overflow: hidden;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  margin-bottom: 32px;

  height: 600px;

  @media (min-width: 640px) {
    height: 720px;
    background-position: center -290px;
    background-size: 115%;
  }

  @media (min-width: 1024px) {
    height: 560px;
    margin-bottom: 48px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: none;

    background-position: -125px -50px;
    background-size: cover;
  }

  & > div:last-child {
    color: #ffffff;
    align-self: flex-start;
    justify-self: center;
    max-width: 280px;
    grid-column: 1;
    grid-row: 2;
    text-align: center;

    @media (min-width: 640px) {
      max-width: 350px;
    }

    @media (min-width: 1024px) {
      align-self: center;
      grid-row: 1;
      grid-column: 2;
      text-align: start;
    }

    h1 {
      margin-bottom: 24px;

      @media (max-width: 640px) {
        font-weight: 700;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 1.29px;
        padding: 0px 15px;
      }
    }

    p {
      font-size: 15px;
      line-height: 25px;
      font-weight: 500;
      padding-bottom: 24px;

      opacity: 0.75;

      @media (min-width: 640px) {
        padding-bottom: 40px;
      }

      @media (min-width: 1024px) {
        font-weight: 200;
        padding-bottom: 65px;
      }
    }
  }
`;

export const Image = styled.div`
  height: 207px;
  /* position: absolute;
  top: 80px;
  left: 145px; */
  justify-self: center;
  align-self: center;

  @media (min-width: 640px) {
    height: 237px;
  }

  @media (min-width: 1024px) {
    height: unset;
    width: 410px;
    position: absolute;
    top: 80px;
    left: 145px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ZX7 = styled.article`
  height: 320px;
  margin-bottom: 24px;
  background-image: url('/assets/home/mobile/image-speaker-zx7.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;

  display: flex;
  align-items: center;

  @media (min-width: 640px) {
    margin-bottom: 32px;

    background-image: url('/assets/home/tablet/image-speaker-zx7.jpg');
  }

  @media (min-width: 1024px) {
    margin-bottom: 48px;
    background-image: url('/assets/home/desktop/image-speaker-zx7.jpg');
  }

  > div {
    padding-left: 24px;

    @media (min-width: 640px) {
      padding-left: 62px;
    }

    @media (min-width: 1024px) {
      padding-left: 95px;
    }
    h4 {
      margin-bottom: 32px;
    }
  }
`;

export const YX1 = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }

  > div:first-child {
    width: 100%;
    height: 200px;
    background-image: url('/assets/home/mobile/image-earphones-yx1.jpg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 8px;

    @media (min-width: 640px) {
      flex: 1;
      background-image: url('/assets/home/tablet/image-earphones-yx1.jpg');
      height: 320px;
    }

    @media (min-width: 1024px) {
      background-image: url('/assets/home/desktop/image-earphones-yx1.jpg');
    }
  }

  > div:last-child {
    width: 100%;
    height: 200px;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;

    @media (min-width: 640px) {
      flex: 1;
      height: 320px;
    }

    > div {
      padding-left: 24px;

      @media (min-width: 640px) {
        padding-left: 40px;
      }

      @media (min-width: 1024px) {
        padding-left: 95px;
      }

      h4 {
        margin-bottom: 32px;
      }
    }
  }
`;
