import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    display: inline;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  button:first-of-type {
    background-color: #ccc;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    height: 36px;
    width: 112px;
    background-color: #7d40e7;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    color: white;

    &:hover {
      opacity: 0.7;
      transition-delay: 100ms;
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 20px;
  padding: 26px 30px 32px 30px;
  border-radius: 4px;
  background: white;

  > div + div {
    margin-top: 16px;
  }
`;

export const InputBlock = styled.div`
  width: 100%;

  > div,
  input {
    margin-top: 9px;
  }

  > span {
    font-weight: bold;
  }

  > span ~ span {
    margin-top: 12px;
    display: block;
    font-weight: bold;
    color: red;
    text-align: center;
  }

  > input {
    width: 100%;
    height: 45px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #999;
    font-size: 16px;
    padding: 12px 15px 12px 15px;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  > div + div {
    margin-left: 30px;
  }
`;
