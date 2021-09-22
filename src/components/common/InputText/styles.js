import styled from 'styled-components';

export const TextInput = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #000000;

    &.error {
      color: #cd2c2c;
    }

    > span {
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: -0.214286px;
      text-transform: capitalize;
      margin-bottom: 9px;
    }
  }

  > input {
    width: 100%;
    padding: 18px 24px;
    border: 1px solid #cfcfcf;
    border-radius: 8px;
    font-family: 'Manrope', sans-serif;

    &:focus {
      outline: none;
      border: 1px solid #d87d4a;
    }

    &.error {
      border: 2px solid #cd2c2c;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`;
