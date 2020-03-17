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
          tableDatas: data.map(delivery => [
            delivery.id,
            delivery.recipient.name,
            <AvatarTable deliveryman={delivery.deliveryman} />,
            delivery.recipient.city,
            delivery.recipient.state,
            <Status>
              <span />
              <strong>Pendente</strong>
            </Status>,
          ]),
        });
        break;
      default:
    }
  }, [entity, setDataTable]);

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
        <tbody>
          {dataTable.tableDatas.map(data => (
            <tr key={data}>
              {data.map(field => (
                <td key={field}>{field}</td>
              ))}

              <td>
                <ControlActions />
              </td>
            </tr>
          ))}
        </tbody>
      </UserTable>
    </Container>
  );
}

TableUsers.propTypes = {
  entity: PropTypes.object.isRequired,
};
