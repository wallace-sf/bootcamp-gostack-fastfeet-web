import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo@2x.png';
import { Container, Content, UserPanel } from './styles';

export default function Header() {
  useEffect(() => {
    const { pathname } = window.location;

    const element = document.querySelector(`a[href='${pathname}']`);

    element.classList.add('active');
  }, []);

  function handleHighlight(e) {
    const siblings = e.target.parentNode.childNodes;

    siblings.forEach(s =>
      s === e.target ? s.classList.add('active') : s.classList.remove('active')
    );
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" color="red" />
          <Link to="/deliveries" onClick={handleHighlight}>
            Entregas
          </Link>
          <Link to="/deliverymen" onClick={handleHighlight}>
            Entregadores
          </Link>
          <Link to="/recipients" onClick={handleHighlight}>
            Destinatários
          </Link>
          <Link to="/problems" onClick={handleHighlight}>
            Problemas
          </Link>
        </nav>
        <UserPanel>
          <strong>User name</strong>
          <button type="button">sair do sistema</button>
        </UserPanel>
      </Content>
    </Container>
  );
}
