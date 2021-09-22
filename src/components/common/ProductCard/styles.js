import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  height: 724px;
  margin-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (min-width: 640px) {
    height: 706px;
    gap: 52px;
  }

  @media (min-width: 1024px) {
    max-height: 560px;
    margin-bottom: 160px;
    gap: 30px;
    flex-direction: row;
  }
`;

export const Image = styled.div`
  flex: 1;
  border-radius: 8px;
  background-color: #f1f1f1;
  background-image: url(${(props) => props.image.desktop});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  /* img {
    width: 100%;
    height: 100%;
    fill: 1;
    object-fit: cover;
  } */
  /* height: 327px; */
  height: 352px;

  width: 100%;

  @media (min-width: 640px) {
    height: 352px;
    width: 100%;
  }

  @media (min-width: 1024px) {
    height: 100%;
    width: unset;
    background-image: url(${(props) => props.image.desktop});
    order: ${(props) => (props.isLeft ? '1' : '2')};
  }
`;

export const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  text-align: center;

  > div {
    @media (min-width: 1024px) {
      padding-left: ${(props) => (props.isLeft ? '110px' : '0px')};
    }
  }

  @media (min-width: 640px) {
    width: 572px;
  }

  @media (min-width: 1024px) {
    order: ${(props) => (props.isLeft ? '2' : '1')};
    text-align: left;
    width: unset;
  }

  h2 {
    margin-bottom: 32px;
    color: #000000;

    @media (max-width: 639px) {
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
      text-align: center;
      letter-spacing: 1px;
    }

    @media (min-width: 640px) {
      padding: 0px 100px;
    }

    @media (min-width: 1024px) {
      padding: 0px;
    }
  }

  p {
    color: #000000;
    opacity: 0.5;
    /* max-width: 349px; */
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    margin-bottom: 24px;

    @media (max-width: 639px) {
    }

    @media (min-width: 1024px) {
      margin-bottom: 65px;
    }
  }
`;

export const Overline = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  line-height: 19px;
  letter-spacing: 10px;
  color: #d87d4a;
  margin-bottom: 16px;
`;
