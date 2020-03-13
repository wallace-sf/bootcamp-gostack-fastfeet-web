import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  margin: 0 auto;
  height: 64px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
      height: 26px;
      border-right: 1px solid #ddd;
    }

    a {
      margin-right: 21px;
      font-size: 15px;
      font-weight: bold;
      color: #999;
      text-transform: uppercase;
    }

    a.active {
      color: #444;
    }

    a:last-of-type {
      margin: 0;
    }
  }
`;

export const UserPanel = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    margin-bottom: 3px;
    font-size: 14px;
    color: #666;
  }

  button {
    font-size: 14px;
    border: none;
    background: none;
    color: #de3b3b;
  }
`;
