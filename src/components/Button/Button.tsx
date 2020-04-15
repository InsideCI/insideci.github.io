import React from 'react';
import './Button.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: string;
}

const Button: React.FC<Props> = ({ text, ...rest }) => {
  return (
    <button className={'button'} {...rest}>
      {text}
    </button>
  );
};

export default Button;
