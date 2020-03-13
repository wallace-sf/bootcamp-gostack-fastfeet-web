import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { Wrapper, Content, PageTitle } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <PageTitle>Gerenciando encomendas</PageTitle>
        {children}
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
