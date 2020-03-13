import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const UserTable = styled.table`
  border-collapse: separate;
  border-spacing: 0 22px;
  width: 100%;

  thead th {
    padding: 12px;
    text-align: left;
  }

  tbody td {
    height: 57px;
    padding: 12px;
    background: #fff;
    color: #666;

    img {
      height: 35px;
      border-radius: 50%;
      vertical-align: middle;
    }

    span {
      margin-left: 5px;
    }

    strong {
      text-transform: uppercase;
      background: #dff0df;
      color: #2ca42b;
      padding: 5px 7px;
      border-radius: 12px;

      &::before {
        content: '';
        margin-right: 6px;
        display: inline-block;
        width: 10px;
        height: 10px;
        vertical-align: middle;
        border-radius: 50%;
        background: #2ca42b;
      }
    }
  }

  tbody tr > td:first-of-type {
    border-radius: 4px 0 0 4px;
    padding-left: 22px;
  }

  tbody tr > td:last-of-type {
    border-radius: 0 4px 4px 0px;
  }
`;
