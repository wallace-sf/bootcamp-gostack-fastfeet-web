import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEllipsisH, FaEye, FaPen, FaTrashAlt } from 'react-icons/fa';
import OutsideClickHandler from 'react-outside-click-handler';

import {
  updateModalContentSuccess,
  toggleModalSuccess,
} from '~/store/modules/modal/actions';
import { Container, ActionMenu, ActionItem } from './styles';

export default function ControlActions({ modalContent, rowData, route }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleModalContent() {
    handleToggleVisible();
    dispatch(updateModalContentSuccess(modalContent));
    dispatch(toggleModalSuccess());
  }

  function handleEdit() {
    return history.push(route, {
      data: rowData,
    });
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>
        <FaEllipsisH size={15} color="#C6C6C6" />
      </button>

      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <ActionMenu visible={visible}>
          <ActionItem onClick={handleModalContent}>
            <FaEye color="#8E5BE8" size={15} />
            <span>Visualizar</span>
          </ActionItem>
          <ActionItem onClick={handleEdit}>
            <FaPen size={15} color="#4D85EE" />
            <span>Editar</span>
          </ActionItem>
          <ActionItem>
            <FaTrashAlt size={15} color="#DE3B3B" />
            <span>Excluir</span>
          </ActionItem>
        </ActionMenu>
      </OutsideClickHandler>
    </Container>
  );
}

ControlActions.propTypes = {
  modalContent: PropTypes.element.isRequired,
  rowData: PropTypes.object,
  route: PropTypes.string,
};

ControlActions.defaultProps = {
  rowData: {},
  route: '',
};
