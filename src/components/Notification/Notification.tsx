import './Notification.scss';

import React, { useEffect, useState } from 'react';

import classNames from 'classnames';

interface Props {
  message: string;
  duration: number;
  type: 'error' | 'warning';
}

const Notification: React.FC<Props> = ({ message, duration, type }) => {
  const [active, setActive] = useState(true);

  const classes = classNames('notification', type, active && 'active');

  useEffect(() => {
    setTimeout(() => setActive(false), duration);
  }, [duration]);

  return (
    <section className={classes}>
      <h1>{message}</h1>
    </section>
  );
};

export default Notification;
