import styled from 'styled-components';

export const Item = styled.article`
  position: relative;
  height: 217px;

  @media (min-width: 640px) {
    flex: 1;
  }

  @media (min-width: 1024px) {
    height: 284px;
  }
`;

export const ProductImage = styled.div`
  height: 100%;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  pointer-events: none;
  img {
    height: 70%;
  }
`;

export const Card = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 8px;
  height: calc(100% - 52px);
  cursor: pointer;

  @media (min-width: 1024px) {
    height: calc(100% - 80px);
  }

  > div {
    text-align: center;
    transform: translateY(88px);

    @media (min-width: 1024px) {
      transform: translateY(116px);
    }

    h6 {
      color: #000000;
      font-size: 15px;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 1.07143px;
      margin-bottom: 17px;

      @media (min-width: 1024px) {
        margin-bottom: 17px;
      }

      @media (min-width: 1024px) {
        margin-bottom: 15px;
      }
    }

    span {
      font-size: 13px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
      color: #000000;
      opacity: 0.5;
      margin-right: 13px;
      transition: all 150ms ease-in-out;
    }
  }

  &:hover {
    span {
      color: #d87d4a;
      opacity: 1;
    }
  }
`;
