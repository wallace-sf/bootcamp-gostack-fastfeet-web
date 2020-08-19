import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import { MdInsertPhoto } from 'react-icons/md';

import api from '~/services/api';

import { Container, Avatar } from './styles';

const AvatarInput = ({ name, url, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);

  const [file, setFile] = useState(defaultValue);
  const [preview, setPreview] = useState(url);

  const handleChange = useCallback(async e => {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url: newUrl } = response.data;

    setFile(id);
    setPreview(newUrl);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'dataset.file',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <Avatar preview={preview}>
        <label htmlFor={name}>
          {preview ? (
            <img src={preview} alt="Avatar" />
          ) : (
            <div>
              <MdInsertPhoto size={40} color="#ddd" />
              <p>Adicionar foto</p>
            </div>
          )}
          <input
            type="file"
            ref={inputRef}
            onChange={handleChange}
            data-file={file}
            accept="image/*"
            id={name}
            name={name}
            {...rest}
          />
        </label>
      </Avatar>
    </Container>
  );
};
export default AvatarInput;

AvatarInput.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
};

AvatarInput.defaultProps = {
  url: '',
};
