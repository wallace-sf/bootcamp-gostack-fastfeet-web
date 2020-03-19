import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import TableUsers from '~/components/TableUsers';

// import { Container } from './styles';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  const entity = {
    typeEntity: 'deliveryman',
    EntityHeadersTable: ['ID', 'Foto', 'Nome', 'E-mail', 'Ações'],
    data: deliverymen,
  };

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      setDeliverymen(response.data);
    }

    loadDeliveries();
  }, []);

  return <TableUsers entity={entity} />;
}
