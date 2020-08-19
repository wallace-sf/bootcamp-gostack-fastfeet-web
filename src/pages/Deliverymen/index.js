import React, { useState, useEffect } from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import ManageTable from '~/components/ManageTable';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';
import PageTitle from '~/styles/pageTitle';

import api from '~/services/api';

import Avatar from '~/styles/Avatar';

export default function Deliverymen({ pageTitle }) {
  const [deliverymen, setDeliverymen] = useState([]);
  const [formattedDeliverymen, setformattedDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      try {
        const response = await api.get('deliverymen');

        return setDeliverymen(response.data);
      } catch (error) {
        return toast.error(
          'Houve um problema para carregar os dados dos entregadores. Tente novamente!'
        );
      }
    }

    loadDeliverymen();
  }, []);

  useEffect(() => {
    function renderRows() {
      return deliverymen.map(deliveryman => {
        const rowData = {
          name: deliveryman.name,
          email: deliveryman.email,
          id: deliveryman.id,
          url: deliveryman.avatar && deliveryman.avatar.url,
          avatar_id: deliveryman.avatar_id,
        };

        return (
          <tr key={shortId()}>
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
              <ControlActions rowData={rowData} route="/deliverymen/edit" />
            </td>
          </tr>
        );
      });
    }

    setformattedDeliverymen(renderRows());
  }, [deliverymen]);

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <ManageTable
        placeholder="Buscar por entregadores"
        route="deliverymen"
        setData={setDeliverymen}
      />
      <DefaultTable type="deliveryman" tableRows={formattedDeliverymen} />
    </>
  );
}

Deliverymen.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
