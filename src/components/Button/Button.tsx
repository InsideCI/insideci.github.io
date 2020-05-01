import './Button.scss';

import React from 'react';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  color?: string;
}

const Button: React.FC<Props> = (props) => {
  const { text, icon, color, ...rest } = props;

  const classes = classNames('button', color ? color : 'transparent');

  return (
    <>
      {icon && <span>{icon}</span>}
      <button className={classes} {...rest}>
        {text}
      </button>
    </>
  );
};

export default Button;
