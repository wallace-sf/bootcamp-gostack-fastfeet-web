import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '~/pages/SignIn';
import Deliveries from '~/pages/Deliveries';
import Deliverymen from '~/pages/Deliverymen';
import Recipients from '~/pages/Recipients';
import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/deliveries"
        component={Deliveries}
        isPrivate
        pageTitle="Gerenciando encomendas"
      />
      <Route
        path="/deliverymen"
        component={Deliverymen}
        isPrivate
        pageTitle="Gerenciando entregadores"
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
