import './Input.scss';

import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';
import { useField } from '@unform/core';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  color?: string;
  small?: boolean;
  full?: boolean;
  centered?: boolean;
}

const Input: React.FC<Props> = (props) => {
  const { name, label, color, small, full, centered, ...rest } = props;

  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const classesComponent = classNames('input', full && 'full');
  const classesInput = classNames(
    color ? color : 'transparent',
    small && 'small',
    full && 'full',
    centered && 'centered'
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <div className={classesComponent}>
      {label && <label htmlFor={fieldName}>{label}</label>}
      <input
        autoComplete={'off'}
        className={classesInput}
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
