import { useField } from '@unform/core';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import './Input.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  color?: string;
  full?: boolean;
}

const Input: React.FC<Props> = (props) => {
  const { name, label, color, full, ...rest } = props;

  const { fieldName, defaultValue = '', registerField, error } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const classesComponent = classNames('input', full && 'full');
  const classesInput = classNames(
    color ? color : 'transparent',
    full && 'full'
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
