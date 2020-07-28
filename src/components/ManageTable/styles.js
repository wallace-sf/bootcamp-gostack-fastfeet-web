import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 34px;
  margin-bottom: 22px;
  display: flex;
  justify-content: space-between;

  button {
    min-width: 142px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 0;
    background: #7d40e7;
    color: #fff;
    text-transform: uppercase;

    svg {
      margin-right: 7px;
    }

    &:hover {
      opacity: 0.7;
      transition-delay: 100ms;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;

  svg {
    padding-left: 16px;
    padding-right: 8px;
  }

  input {
    height: 37px;
    min-width: 187px;
    padding-right: 8px;
    border: 1px solid #ddd;
    border-left: 0;
    border-radius: 0 4px 4px 0;
    font-size: 14px;

    &::placeholder {
      color: #999;
    }
  }
`;

export const IconSearch = styled.div`
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ddd;
  border-right: 0;
  border-radius: 4px 0 0 4px;
`;
