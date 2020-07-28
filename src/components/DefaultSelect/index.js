import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select/async';
import { useField } from '@unform/core';

const customStyles = {
  control: () => ({
    display: 'flex',
    border: '1px solid #ddd',
    borderRadius: 4,
    height: 45,
    color: '#999',
    padding: '0 7px',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    color: '#ddd',
  }),
  indicatorSeparator: () => ({
    width: 0,
  }),
  singleValue: provided => ({
    ...provided,
    color: '#999',
  }),
};

function DefaultSelect({ name, getOptions, placeholder, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(option => option.value);
        }
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <Select
        ref={selectRef}
        styles={customStyles}
        cacheOptions
        defaultOptions
        placeholder={placeholder}
        loadOptions={getOptions}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

export default DefaultSelect;

DefaultSelect.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  getOptions: PropTypes.func.isRequired,
};
