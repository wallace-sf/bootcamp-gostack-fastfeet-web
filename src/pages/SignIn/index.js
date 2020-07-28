import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import DefaultInput from '~/components/DefaultInput';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';

export default function SignIn() {
  const dispatch = useDispatch();
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Insira um e-mail válido.')
          .required('O e-mail é obrigatório.'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      return dispatch(signInRequest(data.email, data.password));
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        return formRef.current.setErrors(validationErrors);
      }

      return null;
    }
  }

  return (
    <>
      <header>
        <img src={logo} alt="Fastfeet" />
      </header>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="email">
          <span>Seu e-mail</span>
          <DefaultInput
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label htmlFor="password">
          <span>Sua senha</span>
          <DefaultInput
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </label>
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
