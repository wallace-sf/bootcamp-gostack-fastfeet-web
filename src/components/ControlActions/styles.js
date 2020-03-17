import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  text-align: center;

  button {
    border: none;
    background: none;
  }
`;

export const ActionMenu = styled.div`
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);
  min-width: 150px;
  display: ${props => (props.visible ? 'block' : 'none')};
  padding: 18px 10px 16px 10px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

export const ActionItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;

  &:hover {
    font-weight: bold;
  }

  & + button {
    margin-top: 5px;
    padding-top: 9px;
    border-top: 1px solid #eeeeee;
  }

  span {
    margin-left: 8px;
    font-size: 16px;
    color: #999999;
    vertical-align: middle;
  }
`;
