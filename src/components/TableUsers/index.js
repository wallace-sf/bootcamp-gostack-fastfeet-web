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
              <strong>Pendente</strong>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>ML</td>
            <td>Martin Lawrence</td>
            <td>martin@email.com</td>
            <td>São Paulo</td>
            <td>Conclúido</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#03</td>
            <td>JK</td>
            <td>John F. Kennedy</td>
            <td>johnfk@email.com</td>
            <td>Rio de Janeiro</td>
            <td>Pendente</td>
            <td>...</td>
          </tr>
        </tbody>
      </UserTable>
    </Container>
  );
}
