import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import AvatarTable from './AvatarTable';
import ControlActions from '~/components/ControlActions';
import { Container, UserTable, Status } from './styles';

export default function TableUsers({ entity }) {
  const [dataTable, setDataTable] = useState({
    tableHeaders: [],
    tableDatas: [],
  });

  useEffect(() => {
    const { typeEntity, data, EntityHeadersTable } = entity;

    switch (typeEntity) {
      case 'delivery':
        setDataTable({
          tableHeaders: EntityHeadersTable,
          tableDatas: data.map(delivery => (
            <tr key={delivery.id}>
              <td>{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>
                <AvatarTable deliveryman={delivery.deliveryman} />
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <Status>
                  <span />
                  <strong>Pendente</strong>
                </Status>
              </td>
              <td>
                <ControlActions />
              </td>
            </tr>
          )),
        });
        break;
      case 'deliveryman':
        setDataTable({
          tableHeaders: EntityHeadersTable,
          tableDatas: data.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>{deliveryman.id}</td>
              <td>{deliveryman.recipient.name}</td>
              <td>
                <AvatarTable deliveryman={delivery.deliveryman} />
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <Status>
                  <span />
                  <strong>Pendente</strong>
                </Status>
              </td>
              <td>
                <ControlActions />
              </td>
            </tr>
          )),
        });
        break;
      default:
    }
  }, [entity, setDataTable]);

  console.tron.log(dataTable.tableDatas);

  return (
    <Container>
      <UserTable>
        <thead>
          <tr>
            {dataTable.tableHeaders.map(header => (
              <th key={header}>{header}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{dataTable.tableDatas.map(data => data)}</tbody>
      </UserTable>
    </Container>
  );
}

TableUsers.propTypes = {
  entity: PropTypes.object.isRequired,
};
