import React, { useState, useEffect } from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import ManageTable from '~/components/ManageTable';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';
import PageTitle from '~/styles/pageTitle';

import api from '~/services/api';

export default function Recipients({ pageTitle }) {
  const [recipients, setRecipients] = useState([]);
  const [formattedRecipients, setFormattedRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      try {
        const response = await api.get('recipients');

        return setRecipients(response.data);
      } catch (error) {
        return toast.error(
          'Houve um problema para carregar os dados dos destinatários. Tente novamente!'
        );
      }
    }

    loadRecipients();
  }, []);

  useEffect(() => {
    function renderRows() {
      return recipients.map(recipient => (
        <tr key={shortId()}>
          <td>#{recipient.id}</td>
          <td>{recipient.name}</td>
          <td>{recipient.street}</td>
          <td>
            <ControlActions />
          </td>
        </tr>
      ));
    }

    setFormattedRecipients(renderRows());
  }, [recipients]);

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <ManageTable
        placeholder="Buscar por destinatários"
        route="recipients"
        setData={setRecipients}
      />
      <DefaultTable type="recipients" tableRows={formattedRecipients} />
    </>
  );
}

Recipients.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};
