import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #7d40e7;
`;

export const Content = styled.div`
  padding: 60px 30px;
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 4px;

  header {
    margin-bottom: 42px;
    text-align: center;
  }

  label span:first-of-type {
    display: block;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  }

  label span ~ span {
    margin-bottom: 12px;
    display: block;
    font-weight: bold;
    color: red;
    text-align: center;
  }

  input {
    margin: 9px 0 17px;
    padding: 15px;
    height: 45px;
    width: 100%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  button {
    height: 45px;
    width: 100%;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    background: #7d40e7;
    border: none;
    border-radius: 4px;
  }
`;
