import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
`;

export const Content = styled.div`
  padding: 25px 25px 42px 25px;
  display: flex;
  min-height: 353px;
  min-width: 450px;
  background: #fff;
  border-radius: 4px;
`;
