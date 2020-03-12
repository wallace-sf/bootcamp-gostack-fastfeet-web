import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  margin: 0 auto;
  height: 64px;
  max-width: 1100px;
  display: flex;
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
