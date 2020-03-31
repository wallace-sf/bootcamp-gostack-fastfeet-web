import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [formattedProblems, setFormattedProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('problems');

      setProblems(response.data);
    }

    loadProblems();
  }, []);

  useEffect(() => {
    function renderRows() {
      return problems.map(problem => (
        <tr key={problem.id}>
          <td>#{problem.id}</td>
          <td>{problem.name}</td>
          <td>{problem.street}</td>
          <td>
            <ControlActions />
          </td>
        </tr>
      ));
    }

    setFormattedProblems(renderRows());
  }, [problems]);

  return <DefaultTable type="problems" tableRows={formattedProblems} />;
}
