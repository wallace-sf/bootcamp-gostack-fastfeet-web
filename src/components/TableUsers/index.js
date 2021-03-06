import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, UserTable } from './styles';

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
            delivery.deliveryman.name,
            delivery.recipient.city,
            delivery.recipient.state,
            'Pendente',
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
            </tr>
          ))}
          {/* */}
          {/* <tr>
            <td>#01</td>
            <td>
              <span>Ludwig Van Beethoven</span>
            </td>
            <td>
              <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
              <span>John Doe</span>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <div>
                <span />
                <strong>Pendente</strong>
              </div>
            </td>
            <td>...</td>
          </tr> */}
        </tbody>
      </UserTable>
    </Container>
  );
}

TableUsers.propTypes = {
  entity: PropTypes.object.isRequired,
};
