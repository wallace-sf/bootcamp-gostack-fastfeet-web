import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import TableUsers from '~/components/TableUsers';
// import { Container } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  return <TableUsers data={deliveries} />;
}
