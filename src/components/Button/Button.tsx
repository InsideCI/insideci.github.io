import React from 'react';
import './Button.scss';

interface Props {
  text: string
  color?: string
}

const Button: React.FC<Props> = ({text}) => {
  return (
    <div className={'Button'}>
      <button className={'button'}>{text}</button>
    </div>
  );
};

export default Button;