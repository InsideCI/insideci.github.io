import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import './Input.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <div className={'input'}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        className={'input__field'}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className={'input__error'}>error</span>}
    </div>
  );
};

export default Input;
