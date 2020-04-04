import React from 'react';
import './Input.scss';

interface Props {
  placeholder: string
}

const Input: React.FC<Props> = ({placeholder}) => {
  return (
    <div className={'Input'}>
      <input className={'input'} placeholder={placeholder}/>
    </div>
  );
};

export default Input;