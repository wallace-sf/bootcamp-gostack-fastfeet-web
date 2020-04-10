import styled from 'styled-components';

export const Status = styled.div`
  display: inline-block;
  align-items: center;
  text-transform: uppercase;
  background: #dff0df;
  color: ${props => {
    switch (props.status) {
      case 'pending':
        return 'Pendente';
      case 'checkedIn':
        return 'Retirada';
      case 'delivered':
        return 'Entregue';
      case 'canceled':
        return 'Cancelada';
      default:
        return '#fff';
    }
  }};
  padding: 5px 7px;
  border-radius: 12px;

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

export const Avatar = styled.div`
  img {
    height: 35px;
    border-radius: 50%;
    vertical-align: middle;
  }

  span {
    margin-left: 5px;
  }
`;
