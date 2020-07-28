import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { Wrapper, Content, Main } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Main>{children}</Main>
      </Content>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
