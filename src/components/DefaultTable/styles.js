import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;
`;

export const Content = styled.table`
  border-collapse: separate;
  border-spacing: 0 22px;
  width: 100%;

  thead th {
    padding: 12px;
    text-align: left;
  }

  thead tr > th:first-of-type {
    padding-left: 25px;
  }

  tbody {
    td {
      height: 57px;
      padding: 12px;
      background: #fff;
      color: #666;
    }

    tr > td:first-of-type {
      border-radius: 4px 0 0 4px;
      padding-left: 25px;
    }

    tr > td:last-of-type {
      border-radius: 0 4px 4px 0px;
    }
  }
`;
