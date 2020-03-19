import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import TableUsers from '~/components/TableUsers';
// import { Container } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  const entity = {
    typeEntity: 'delivery',
    EntityHeadersTable: [
      'ID',
      'Destinatário',
      'Entregador',
      'Cidade',
      'Estado',
      'Status',
    ],
    data: deliveries,
  };

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  return <TableUsers entity={entity} />;
}
