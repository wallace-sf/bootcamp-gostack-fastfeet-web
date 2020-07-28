import styled, { css } from 'styled-components';

export const Status = styled.div`
  display: inline-block;
  align-items: center;
  text-transform: uppercase;
  padding: 5px 7px;
  border-radius: 12px;

  ${props => {
    switch (props.status) {
      case 'pending':
        return css`
          background: #f0f0df;
          color: #c1bc35;

          span {
            background: #c1bc35;
          }
        `;
      case 'checkedIn':
        return css`
          background: #bad2ff;
          color: #4d85ee;

          span {
            background: #4d85ee;
          }
        `;
      case 'delivered':
        return css`
          background: #dff0df;
          color: #2ca42b;

          span {
            background: #2ca42b;
          }
        `;
      case 'canceled':
        return css`
          background: #fab0b0;
          color: #de3b3b;

          span {
            background: #de3b3b;
          }
        `;
      default:
        return '#fff';
    }
  }};

  span {
    content: '';
    margin-right: 6px;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  strong {
    vertical-align: middle;
  }
`;

export const ModalContent = styled.div`
  width: 100%;

  section {
    &:not(:last-child) {
      margin-bottom: 9px;
      padding-bottom: 12px;
      border-bottom: 1px solid #eee;
    }

    h2 {
      margin-bottom: 4px;
      font-size: 14px;
    }

    p {
      line-height: 26px;
      font-size: 16px;
      color: #666666;
    }
  }
`;

export const NoImage = styled.div`
  margin: 0 auto;
  margin-top: 23px;
  height: 36px;
  width: 234px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #999;
  color: #999;

  p {
    text-transform: uppercase;
  }
`;

export const TableBlock = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 5px;
  }
`;
