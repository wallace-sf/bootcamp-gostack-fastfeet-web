import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import DefaultTable from '~/components/DefaultTable';
import ControlActions from '~/components/ControlActions';
import DefaultModal from '~/components/DefaultModal';

import { ModalContent } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [formattedProblems, setFormattedProblems] = useState([]);

  const { open, content } = useSelector(state => state.modal);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('problems');

      setProblems(response.data);
    }

    loadProblems();
  }, []);

  function modalContent(problem) {
    return (
      <ModalContent>
        <section>
          <h2>Visualizar problema</h2>
          <p>{problem.description}</p>
        </section>
      </ModalContent>
    );
  }

  useEffect(() => {
    function renderRows() {
      return problems.map(problem => (
        <tr key={problem.id}>
          <td>#{problem.delivery_id}</td>
          <td>{problem.description}</td>
          <td>
            <ControlActions modalContent={modalContent(problem)} />
          </td>
        </tr>
      ));
    }

    setFormattedProblems(renderRows());
  }, [problems]);

  return (
    <>
      <DefaultTable type="problems" tableRows={formattedProblems} />;
      {open && <DefaultModal content={content} />}
    </>
  );
}
