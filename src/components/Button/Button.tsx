import './Button.scss';

import React from 'react';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  text?: string;
  color?: 'primary' | 'white';
  round?: boolean;
  light?: boolean;
  faded?: boolean;
  full?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { text, icon, color, round, light, faded, full, ...rest } = props;

  const classes = classNames(
    'button',
    color ? color : 'transparent',
    round && 'round',
    light && 'light',
    faded && 'faded',
    full && 'full'
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
