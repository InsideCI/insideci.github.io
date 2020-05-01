import './Button.scss';

import React from 'react';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  color?: string;
  round?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { text, icon, color, round, ...rest } = props;

  const classes = classNames(
    'button',
    color ? color : 'transparent',
    round && 'round'
  );

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
