import styled from 'styled-components';

export const Container = styled.div`
  padding: 0px 24px;
  background: #f2f2f2;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }
`;

export const Content = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding-bottom: 97px;

  display: flex;
  flex-direction: column;

  gap: 32px;

  margin-top: 24px;

  @media (min-width: 640px) {
    padding-bottom: 116px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;

    margin-top: 56px;
    padding-bottom: 141px;

    > div:first-child {
      /* flex: 130px; */
      flex: 1;
    }
  }
`;
