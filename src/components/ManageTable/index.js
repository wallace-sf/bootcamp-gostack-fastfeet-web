import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdSearch, MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { Container, InputBox, IconSearch } from './styles';

export default function ManageTable({ placeholder, route, setData }) {
  const history = useHistory();

  const [textInput, setTextInput] = useState('');

  function handleInputSearch(e) {
    return setTextInput(e.target.value);
  }

  function handleRegister() {
    switch (route) {
      case 'delivery':
        return history.push('/deliveries/register');
      default:
        return history.push('/deliverymen/register');
    }
  }

  async function handleFilterTable(e) {
    e.preventDefault();

    try {
      const response = await api.get(`${route}/?q=${textInput}`);

      return setData(response.data);
    } catch (error) {
      return toast.error(
        'Houve um problema para filtrar a tabela. Tente novamente!'
      );
    }
  }

  return (
    <Container>
      <InputBox>
        <IconSearch>
          <MdSearch size={50} color="#999" />
        </IconSearch>
        <form onSubmit={handleFilterTable}>
          <input
            type="text"
            name="seachTable"
            placeholder={placeholder}
            autoCapitalize="off"
            autoCorrect="off"
            maxLength={120}
            value={textInput}
            onChange={handleInputSearch}
          />
        </form>
      </InputBox>

      <button type="button" onClick={handleRegister}>
        <MdAdd size={22} />
        <b>Cadastrar</b>
      </button>
    </Container>
  );
}

ManageTable.propTypes = {
  placeholder: PropTypes.string,
  route: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
};

ManageTable.defaultProps = {
  placeholder: '',
};
