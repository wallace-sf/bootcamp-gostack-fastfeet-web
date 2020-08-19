import styled from 'styled-components';

export const Avatar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
  height: 150px;
  width: 150px;
  border: 1px dashed #ddd;
  border-radius: 50%;
  overflow: hidden;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      position: absolute;
      height: 150px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
      left: 50%;
      top: 50%;
      vertical-align: middle;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    input {
      display: none;
    }

    div {
      color: #ddd;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
