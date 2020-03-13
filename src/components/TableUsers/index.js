import React from 'react';

import { Container, UserTable } from './styles';

export default function TableUsers() {
  return (
    <Container>
      <UserTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>
              <span>JD</span>
            </td>
            <td>
              <img src="https://ui-avatars.com/api/?name=John+Doe" alt="" />
              <span>John Doe</span>
            </td>
            <td>example@email.com</td>
            <td>Rio do Sul</td>
            <td>
              <div>
                <span />
                <strong>Pendente</strong>
              </div>
            </td>
            <td>...</td>
          </tr>
        </tbody>
      </UserTable>
    </Container>
  );
}
