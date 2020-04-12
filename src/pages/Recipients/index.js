import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import ManageTable from '~/components/ManageTable';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [formattedRecipients, setFormattedRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    loadRecipients();
  }, []);

  useEffect(() => {
    function renderRows() {
      return recipients.map(recipient => (
        <tr key={recipient.id}>
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
      <ManageTable
        placeholder="Buscar por destinatários"
        route="recipients"
        setData={setRecipients}
      />
      <DefaultTable type="recipients" tableRows={formattedRecipients} />;
    </>
  );
}
