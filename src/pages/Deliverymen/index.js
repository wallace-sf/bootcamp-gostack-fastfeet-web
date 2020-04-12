import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import ManageTable from '~/components/ManageTable';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';

import { Avatar } from './styles';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);
  const [formattedDeliverymen, setformattedDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliverymen');

      setDeliverymen(response.data);
    }

    loadDeliverymen();
  }, []);

  useEffect(() => {
    function renderRows() {
      return deliverymen.map(deliveryman => (
        <tr key={deliveryman.id}>
          <td>#{deliveryman.id}</td>
          <td>
            <Avatar>
              <img
                src={
                  (deliveryman.avatar && deliveryman.avatar.url) ||
                  `https://ui-avatars.com/api/?name=$${deliveryman.name}`
                }
                alt={deliveryman.name}
              />
            </Avatar>
          </td>
          <td>{deliveryman.name}</td>
          <td>{deliveryman.email}</td>
          <td>
            <ControlActions />
          </td>
        </tr>
      ));
    }

    setformattedDeliverymen(renderRows());
  }, [deliverymen]);

  return (
    <>
      <ManageTable
        placeholder="Buscar por entregadores"
        route="deliverymen"
        setData={setDeliverymen}
      />
      <DefaultTable type="deliveryman" tableRows={formattedDeliverymen} />
    </>
  );
}
