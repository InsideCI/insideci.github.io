import './Input.scss';

import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useField } from '@unform/core';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  color?: string;
}

const Input: React.FC<Props> = (props) => {
  const { name, label, color, ...rest } = props;

  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const classes = classNames(color ? color : 'transparent');

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
        autoComplete={'off'}
        className={classes}
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
