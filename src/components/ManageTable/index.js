import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdSearch, MdAdd } from 'react-icons/md';

import api from '~/services/api';
import { Container, InputBox, IconSearch } from './styles';

export default function ManageTable({ placeholder, route, setData }) {
  const [textInput, setTextInput] = useState('');

  function handleInputSearch(e) {
    setTextInput(e.target.value);
  }

  async function handleFilterTable(e) {
    e.preventDefault();

    const response = await api.get(`${route}/?q=${textInput}`);

    setData(response.data);
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

      <button type="button">
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
