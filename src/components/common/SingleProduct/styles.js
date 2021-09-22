import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  margin-bottom: 88px;

  @media (min-width: 640px) {
    padding: 0px 40px;
    margin-bottom: 120px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 160px;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  margin-top: 24px;
  @media (min-width: 640px) {
    flex-direction: row;
    height: 480px;
    gap: 69px;
  }

  @media (min-width: 1024px) {
    margin-top: 56px;
    max-height: 560px;
    gap: 30px;
  }
`;

export const Image = styled.div`
  border-radius: 8px;
  background-color: #f1f1f1;
  background-image: url(${(props) => props.image.mobile});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  height: 327px;

  width: 100%;

  @media (min-width: 640px) {
    /* height: 352px; */
    height: 100%;

    width: 281px;
    background-image: url(${(props) => props.image.tablet});
  }

  @media (min-width: 1024px) {
    flex: 1;
    height: 100%;
    width: unset;
    background-image: url(${(props) => props.image.desktop});
  }
`;

export const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  > div {
    @media (min-width: 1024px) {
      width: 445px;
    }
  }

  @media (min-width: 640px) {
    width: 572px;
  }

  @media (min-width: 1024px) {
    text-align: left;
    width: 445px;
  }

  h2 {
    margin-bottom: 24px;
    color: #000000;

    @media (max-width: 639px) {
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 1px;
    }

    @media (min-width: 640px) {
      margin-bottom: 32px;
      width: 50%;
    }

    @media (min-width: 1024px) {
      padding: 0px;
    }
  }

  h6 {
    margin-bottom: 24px;

    @media (min-width: 640px) {
      margin-bottom: 31px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 47px;
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

    @media (min-width: 640px) {
      margin-bottom: 32px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 32px;
    }
  }
`;

export const Overline = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  line-height: 19px;
  letter-spacing: 10px;
  color: #d87d4a;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    margin-bottom: 16px;
  }
`;

export const AddCart = styled.div`
  display: flex;
  gap: 16px;
`;

export const ItemAmount = styled.div`
  width: 120px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  .value {
    cursor: pointer;
    padding: 5px;

    font-weight: bold;
    font-size: 13px;
    line-height: 18px;

    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;

    color: #000000;
    opacity: 0.25;

    transition: all 150ms ease-in-out;

    &:hover {
      color: #d87d4a;
      opacity: 1;
    }
  }
`;
