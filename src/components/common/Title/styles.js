import styled from 'styled-components';

export const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 32px 0px;
  margin-bottom: 64px;

  @media (max-width: 639px) {
    h2 {
      font-weight: bold;
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 2px;
    }
  }

  @media (min-width: 640px) {
    padding: 97px 0px;
    margin-bottom: 120px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 160px;
  }
`;
