import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo@2x.png';
import { Container, Content } from './styles';

export default function Header() {
  function handleHighlight(e) {
    console.log(e.target.parentNode);
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" color="red" />
          <Link to="/deliveries">Entregas</Link>
          <Link to="/deliverymen" onClick={handleHighlight}>
            Entregadores
          </Link>
          <Link to="/recipients">Destinatários</Link>
          <Link to="/problems">Problemas</Link>
        </nav>
      </Content>
    </Container>
  );
}
