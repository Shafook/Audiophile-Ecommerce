import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #ffffff; */
  padding: 0px 24px;

  @media (min-width: 640px) {
    padding: 0px 40px;
  }
`;

export const Category = styled.section`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 10px;
  }

  @media (min-width: 1024px) {
    gap: 30px;
  }
`;
