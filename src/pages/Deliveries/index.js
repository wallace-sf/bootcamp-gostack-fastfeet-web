import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import shortId from 'shortid';
import PropTypes from 'prop-types';

import ManageTable from '~/components/ManageTable';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';
import DefaultModal from '~/components/DefaultModal';
import PageTitle from '~/styles/pageTitle';

import api from '~/services/api';
import formatDate from '~/utils/formatDate';

import { Status, ModalContent, NoImage, TableBlock } from './styles';
import Avatar from '~/styles/Avatar';

export default function Deliveries({ pageTitle }) {
  const [deliveries, setDeliveries] = useState([]);
  const [formattedDeliveries, setformattedDeliveries] = useState([]);

  const { open, content } = useSelector(state => state.modal);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  function translateStatus(status) {
    switch (status) {
      case 'pending':
        return 'Pendente';
      case 'checkedIn':
        return 'Retirada';
      case 'delivered':
        return 'Entregue';
      case 'canceled':
        return 'Cancelada';
      default:
        return status;
    }
  }

  function modalContent(delivery) {
    return (
      <ModalContent>
        <section>
          <h2>Informações da encomenda</h2>
          <p>
            {delivery.recipient.street}, {delivery.recipient.number}
          </p>
          <p>
            {delivery.recipient.city} - {delivery.recipient.state}
          </p>
          <p>{delivery.recipient.zip_code}</p>
        </section>
        <section>
          <h2>Datas</h2>
          <p>
            <b>Retirada: </b>
            {delivery.start_date && formatDate(delivery.start_date)}
          </p>
          <p>
            <b>Entrega: </b>
            {delivery.end_date && formatDate(delivery.end_date)}
          </p>
        </section>
        <section>
          <h2>Assinatura do destinatário</h2>
          {delivery.signature ? (
            <img src="" alt="" />
          ) : (
            <NoImage>
              <p>
                <b>Sem assinatura</b>
              </p>
            </NoImage>
          )}
        </section>
      </ModalContent>
    );
  }

  useEffect(() => {
    function renderRows() {
      return deliveries.map(delivery => {
        const rowData = {
          recipient: {
            value: delivery.recipient_id,
            label: delivery.recipient.name,
          },
          deliveryman: {
            value: delivery.deliveryman_id,
            label: delivery.deliveryman.name,
          },
          product: delivery.product,
          id: delivery.id,
        };

        return (
          <tr key={shortId()}>
            <td>#{delivery.id}</td>
            <td>{delivery.recipient.name}</td>
            <td>
              <TableBlock>
                <Avatar>
                  <img
                    src={
                      (delivery.deliveryman.avatar &&
                        delivery.deliveryman.avatar.url) ||
                      `https://ui-avatars.com/api/?name=$${delivery.deliveryman.name}`
                    }
                    alt={delivery.deliveryman.name}
                  />
                </Avatar>
                <span>{delivery.deliveryman.name}</span>
              </TableBlock>
            </td>
            <td>{delivery.recipient.city}</td>
            <td>{delivery.recipient.state}</td>
            <td>
              <Status status={delivery.status}>
                <span />
                <strong>{translateStatus(delivery.status)}</strong>
              </Status>
            </td>
            <td>
              <ControlActions
                modalContent={modalContent(delivery)}
                rowData={rowData}
                route="/deliveries/edit"
              />
            </td>
          </tr>
        );
      });
    }

    setformattedDeliveries(renderRows());
  }, [deliveries]);

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <ManageTable
        placeholder="Busca por encomendas"
        route="delivery"
        setData={setDeliveries}
      />
      <DefaultTable type="delivery" tableRows={formattedDeliveries} />
      {open && <DefaultModal content={content} />}
    </>
  );
}

Deliveries.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
