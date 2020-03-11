import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <header>
        <img src={logo} alt="Fastfeet" />
      </header>
      <Form onSubmit={handleSubmit} schema={schema}>
        <label htmlFor="email">
          <span>Seu e-mail</span>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
        </label>
        <label htmlFor="password">
          <span>Sua senha</span>
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
