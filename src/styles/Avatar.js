import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: inline-block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  overflow: hidden;

  img {
    position: absolute;
    height: 35px;
    left: 50%;
    top: 50%;
    vertical-align: middle;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
