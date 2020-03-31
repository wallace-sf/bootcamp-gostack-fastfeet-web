import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';

import { Status, Avatar } from './styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);
  const [formattedDeliveries, setformattedDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  useEffect(() => {
    function renderRows() {
      return deliveries.map(delivery => (
        <tr key={delivery.id}>
          <td>#{delivery.id}</td>
          <td>{delivery.recipient.name}</td>
          <td>
            <Avatar>
              <img
                src={
                  (delivery.deliveryman.avatar &&
                    delivery.deliveryman.avatar.url) ||
                  `https://ui-avatars.com/api/?name=$${delivery.deliveryman.name}`
                }
                alt={delivery.deliveryman.name}
              />
              <span>{delivery.deliveryman.name}</span>
            </Avatar>
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
      ));
    }

    setformattedDeliveries(renderRows());
  }, [deliveries]);

  return <DefaultTable type="delivery" tableRows={formattedDeliveries} />;
}
