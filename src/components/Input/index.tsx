import React, {
  useEffect,
  useRef,
} from 'react';
import { useField } from '@unform/core';

import { TextInput } from './styles';

function Input({ name, ...rest }) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      clearValue(ref) {
        ref.value = '';
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <TextInput
      ref={inputRef}
      keyboardAppearance="dark"
      autoCapitalize="none"
      autoCorrect={false}
      autoCompleteType="off"
      defaultValue={defaultValue}
      onChangeText={value => {
        if (inputRef.current) {
          inputRef.current.value = value;
        }
      }}
      {...rest}
    />
  );
};

export default Input;