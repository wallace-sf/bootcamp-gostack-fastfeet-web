import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';

import { toggleModalSuccess } from '~/store/modules/modal/actions';
import { Container, Content } from './styles';

export default function DefaultModal({ content }) {
  const dispatch = useDispatch();

  function handleOutsideClick() {
    return dispatch(toggleModalSuccess());
  }

  return (
    <Container>
      <OutsideClickHandler onOutsideClick={handleOutsideClick}>
        <Content>{content}</Content>
      </OutsideClickHandler>
    </Container>
  );
}

DefaultModal.propTypes = {
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
