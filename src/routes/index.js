import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import DefaultCRUD from '~/components/DefaultCRUD';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        exact
        path="/deliveries"
        component={Deliveries}
        isPrivate
        pageTitle="Gerenciando encomendas"
      />
      <Route
        path="/deliveries/register"
        component={DefaultCRUD}
        isPrivate
        pageTitle="Cadastro de encomendas"
        backRoute="/deliveries"
        type="delivery"
      />
      <Route
        path="/deliveries/edit"
        component={DefaultCRUD}
        isPrivate
        pageTitle="Edição de encomendas"
        backRoute="/deliveries"
        type="delivery_edit"
      />
      <Route
        exact
        path="/deliverymen"
        component={Deliverymen}
        isPrivate
        pageTitle="Gerenciando entregadores"
      />
      <Route
        path="/deliverymen/register"
        component={DefaultCRUD}
        isPrivate
        pageTitle="Cadastro de entregadores"
        backRoute="/deliverymen"
        type="deliveryman"
      />
      <Route
        path="/deliverymen/edit"
        component={DefaultCRUD}
        isPrivate
        pageTitle="Edição de entregadores"
        backRoute="/deliverymen"
        type="deliveryman_edit"
      />
      <Route
        path="/recipients"
        component={Recipients}
        isPrivate
        pageTitle="Gerenciando destinatários"
      />
      <Route
        path="/problems"
        component={Problems}
        isPrivate
        pageTitle="Problemas na entrega"
      />
    </Switch>
  );
}
