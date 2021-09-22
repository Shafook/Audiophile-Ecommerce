import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  margin-top: ${(props) => (props.home ? '96px' : '120px')};
  margin-bottom: ${(props) => (props.home ? '96px' : '120px')};

  @media (min-width: 640px) {
    margin-top: ${(props) => (props.home ? '96px' : '120px')};
    margin-bottom: ${(props) => (props.home ? '96px' : '120px')};
    padding: 0px 40px;
  }

  @media (min-width: 1024px) {
    margin-top: ${(props) => (props.home ? '200px' : '160px')};
    margin-bottom: ${(props) => (props.home ? '200px' : '160px')};
  }
`;

export const Content = styled.div`
  /* height: 698px; */
  max-width: 1110px;
  margin: 0 auto;
  height: 698px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media (min-width: 640px) {
    height: 633px;
    gap: 63px;
  }

  @media (min-width: 1024px) {
    height: 588px;
    flex-direction: row;
    gap: 30px;
  }
`;

export const Texts = styled.div`
  order: 2;
  flex: 1;

  @media (min-width: 1024px) {
    flex: 1;
    order: 1;
  }

  > div {
    max-width: 573px;
    text-align: center;

    @media (min-width: 1024px) {
      max-width: 445px;
    }
  }

  h2 {
    margin-bottom: 32px;

    @media (max-width: 640px) {
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
      text-align: center;
      letter-spacing: 1px;
    }

    span {
      color: #d87d4a;
    }
  }

  p {
    font-size: 15px;
    line-height: 25px;
    font-weight: 700;
    opacity: 0.5;

    @media (min-width: 1024px) {
      font-weight: 200;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  order: 1;

  background-image: url('/assets/shared/mobile/image-best-gear.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (min-width: 640px) {
    background-image: url('/assets/shared/tablet/image-best-gear.jpg');
  }

  @media (min-width: 1024px) {
    order: 2;
    background-image: url('/assets/shared/desktop/image-best-gear.jpg');
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
