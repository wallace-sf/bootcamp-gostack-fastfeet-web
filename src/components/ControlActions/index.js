import React, { useState } from 'react';
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';

import { Container, ActionMenu, ActionItem } from './styles';

export default function ControlActions() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>
        <FaEllipsisH size={15} color="#C6C6C6" />
      </button>

      <ActionMenu visible={visible}>
        <ActionItem>
          <FaEye color="#8E5BE8" size={15} />
          <span>Visualizar</span>
        </ActionItem>
        <ActionItem>
          <FaPen size={15} color="#4D85EE" />
          <span>Editar</span>
        </ActionItem>
        <ActionItem>
          <FaTrashAlt size={15} color="#DE3B3B" />
          <span>Excluir</span>
        </ActionItem>
      </ActionMenu>
    </Container>
  );
}
