import React from 'react';
import './Button.scss';

interface Props {
  text: string;
  color?: string;
}

type ButtonProps = JSX.IntrinsicElements['button'] & Props;

const Button: React.FC<ButtonProps> = ({ text, ...rest }) => {
  return (
    <button className={'button'} {...rest}>
      {text}
    </button>
  );
};

export default Button;
