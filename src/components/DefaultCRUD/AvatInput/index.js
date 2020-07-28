import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

import api from '~/services/api';

function AvatInput() {
  const { defaultValue, registerField } = useField('avatar');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            'https://api.adorable.io/avatars/120/kenny@adorable.io.png'
          }
          alt=""
        />
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

export default AvatInput;
