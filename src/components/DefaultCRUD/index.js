import React, { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import DefaultSelect from '~/components/DefaultSelect';
import DefaultInput from '~/components/DefaultInput';
import PageTitle from '~/styles/pageTitle';
import AvatarInput from './AvatarInput';

import {
  Container,
  Header,
  Content,
  Actions,
  InputBlock,
  InputGroup,
} from './styles';

import api from '~/services/api';

function DefaultCRUD({ pageTitle, backRoute, type }) {
  const history = useHistory();
  const formRef = useRef(null);
  const location = useLocation();

  function handleBackRoute() {
    return history.push(backRoute);
  }

  async function getOptions(inputValue, route) {
    try {
      const response = await api.get(`/${route}?q=${inputValue}`);
      const formattedData = response.data.map(data => ({
        value: data.id,
        label: data.name,
      }));

      return formattedData;
    } catch (error) {
      return toast.error(
        'Houve um problema para buscar os dados. Tente novamente!'
      );
    }
  }

  function renderCrudContent() {
    switch (type) {
      case 'delivery':
      case 'delivery_edit':
        return (
          <>
            <InputGroup>
              <InputBlock>
                <span>Destinatário</span>
                <DefaultSelect
                  name="recipient"
                  placeholder="Selecione um destinatário"
                  getOptions={inputValue =>
                    getOptions(inputValue, 'recipients')
                  }
                />
              </InputBlock>
              <InputBlock>
                <span>Entregador</span>
                <DefaultSelect
                  name="deliveryman"
                  placeholder="Selecione um entregador"
                  getOptions={inputValue =>
                    getOptions(inputValue, 'deliverymen')
                  }
                />
              </InputBlock>
            </InputGroup>
            <InputBlock>
              <span>Produto</span>
              <DefaultInput
                name="product"
                type="text"
                placeholder="Digite o nome do produto"
              />
            </InputBlock>
          </>
        );
      case 'deliveryman':
      case 'deliveryman_edit':
        return (
          <>
            <AvatarInput
              name="avatar_id"
              url={location.state && location.state.data.url}
            />
            <InputBlock>
              <span>Nome</span>
              <DefaultInput
                name="name"
                type="text"
                placeholder="Digite o nome do entregador"
              />
            </InputBlock>
            <InputBlock>
              <span>E-mail</span>
              <DefaultInput
                name="email"
                type="text"
                placeholder="Digite o e-mail do entregador"
              />
            </InputBlock>
          </>
        );
      default:
        return <h1>padrão</h1>;
    }
  }

  async function handleSubmit(data) {
    try {
      formRef.current.setErrors({});

      switch (type) {
        case 'delivery': {
          const schema = Yup.object().shape({
            recipient: Yup.string().required(
              'Por favor, selecione um destinatário.'
            ),
            deliveryman: Yup.string().required(
              'Por favor, selecione um entregador.'
            ),
            product: Yup.string()
              .min(5, 'Insira o mínimo de 5 caracteres.')
              .required('Por favor, insira o nome do produto.'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await api.post('/delivery', {
            product: data.product,
            recipient_id: data.recipient,
            deliveryman_id: data.deliveryman,
          });

          return toast.success('Produto cadastrado com sucesso!');
        }
        case 'delivery_edit': {
          const schema = Yup.object().shape({
            recipient: Yup.string().required(
              'Por favor, selecione um destinatário.'
            ),
            deliveryman: Yup.string().required(
              'Por favor, selecione um entregador.'
            ),
            product: Yup.string()
              .min(5, 'Insira o mínimo de 5 caracteres.')
              .required('Por favor, insira o nome do produto.'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await api.put(`/delivery/${location.state.data.id}`, {
            product: data.product,
            recipient_id: data.recipient,
            deliveryman_id: data.deliveryman,
          });

          return toast.success('Produto editado com sucesso!');
        }
        case 'deliveryman': {
          const schema = Yup.object().shape({
            name: Yup.string().required(
              'Por favor, insira um nome para o entregador.'
            ),
            email: Yup.string()
              .email('Insira um e-mail válido.')
              .required('O e-mail é obrigatório.'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await api.post('/deliverymen', {
            name: data.name,
            email: data.email,
            avatar_id: data.avatar_id,
          });

          return toast.success('Entregador cadastrado com sucesso!');
        }
        case 'deliveryman_edit': {
          const schema = Yup.object().shape({
            name: Yup.string().required(
              'Por favor, insira um nome para o entregador.'
            ),
            email: Yup.string()
              .email('Insira um e-mail válido.')
              .required('O e-mail é obrigatório.'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await api.put(`/deliverymen/${location.state.data.id}`, {
            name: data.name,
            email: data.email,
            avatar_id: data.avatar_id,
          });

          return toast.success('Entregador editado com sucesso!');
        }
        default:
          return null;
      }
    } catch (err) {
      const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        return formRef.current.setErrors(validationErrors);
      }

      return toast.error(
        'Houve um problema no cadastro. Por favor, tente novamente!'
      );
    }
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        ref={formRef}
        initialData={location.state ? location.state.data : {}}
      >
        <Header>
          <PageTitle>{pageTitle}</PageTitle>
          <Actions>
            <button type="button" onClick={handleBackRoute}>
              <MdKeyboardArrowLeft size={24} />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <MdDone size={24} />
              <span>Salvar</span>
            </button>
          </Actions>
        </Header>
        <Content>{renderCrudContent()}</Content>
      </Form>
    </Container>
  );
}

export default DefaultCRUD;

DefaultCRUD.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  backRoute: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
