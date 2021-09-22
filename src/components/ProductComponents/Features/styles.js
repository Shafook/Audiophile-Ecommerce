import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  margin-bottom: 120px;

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
  gap: 88px;

  @media (min-width: 640px) {
    gap: 120px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 125px;
  }

  h2 {
    margin-bottom: 32px;

    @media (max-width: 639px) {
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
    }

    @media (min-width: 1024px) {
    }
  }
`;

export const Feature = styled.div`
  @media (min-width: 640px) {
  }

  @media (min-width: 1024px) {
    flex: 635px;
  }
`;

export const Box = styled.div`
  @media (min-width: 640px) {
    display: flex;
  }

  @media (min-width: 1024px) {
    display: block;

    width: 350px;
  }

  h2,
  ul {
    flex: 1;
  }

  ul > li {
    color: #000000;
    &:not(:last-child) {
      margin-bottom: 8px;
    }

    .number {
      color: #d87d4a;
      margin-right: 24px;
      font-weight: bold;
      font-size: 15px;
      line-height: 25px;
    }

    .itemInBox {
      font-weight: 700;
      font-size: 15px;
      line-height: 25px;
      opacity: 0.5;
    }
  }
`;
