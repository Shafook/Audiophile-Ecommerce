import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  margin-bottom: 120px;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 160px;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  /* height: 571px; */
  margin: 0 auto;

  @media (min-width: 640px) {
    height: 563px;
  }

  @media (min-width: 1024px) {
    height: 571px;
  }

  h3 {
    margin-bottom: 40px;
    text-align: center;

    @media (min-width: 640px) {
      margin-bottom: 56px;
    }

    @media (min-width: 1024px) {
      margin-bottom: 64px;
    }
  }
`;

export const ProductItems = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  gap: 56px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 12px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;

export const ProductCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h5 {
    margin-bottom: 32px;
  }
`;

export const Image = styled.div`
  height: 120px;
  width: 100%;
  background-color: #f1f1f1;
  background-image: url(${(props) => props.image.mobile});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border-radius: 8px;
  margin-bottom: 32px;

  @media (min-width: 640px) {
    height: 318px;
    background-image: url(${(props) => props.image.tablet});
    background-size: cover;
    margin-bottom: 40px;
  }

  @media (min-width: 1024px) {
    background-image: url(${(props) => props.image.desktop});
  }
`;
