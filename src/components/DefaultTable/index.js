import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { delivery, deliveryman, recipients, problems } from '~/utils/headers';

import { Container, Content } from './styles';

export default function DefaultTable({ type, tableRows }) {
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    switch (type) {
      case 'delivery':
        setTableHeaders(delivery);
        break;
      case 'deliveryman':
        setTableHeaders(deliveryman);
        break;
      case 'recipients':
        setTableHeaders(recipients);
        break;
      case 'problems':
        setTableHeaders(problems);
        break;
      default:
        setTableHeaders([]);
    }
  }, [type]);

  return (
    <Container>
      <Content>
        <thead>
          <tr>
            {tableHeaders.map(headerText => (
              <th key={headerText}>{headerText}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </Content>
    </Container>
  );
}

DefaultTable.propTypes = {
  type: PropTypes.string.isRequired,
  tableRows: PropTypes.array.isRequired,
};
