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
  height: 756px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);

  grid-row-gap: 20px;
  /* grid-column-gap: 30px; */

  @media (min-width: 640px) {
    height: 368px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 277px 1fr;
    grid-row-gap: 20px;
    grid-column-gap: 18px;
  }

  @media (min-width: 1024px) {
    height: 592px;
    grid-template-columns: 445px 1fr;
    grid-row-gap: 32px;
    grid-column-gap: 30px;
  }
`;

export const Image = styled.div`
  background-image: url(${(props) => props.image.mobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 8px;

  @media (min-width: 640px) {
    background-image: url(${(props) => props.image.tablet});
  }

  @media (min-width: 1024px) {
    background-image: url(${(props) => props.image.desktop});
  }

  &.lg-img {
    grid-row: 3 / span 2;
    @media (min-width: 640px) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }
  }
`;
