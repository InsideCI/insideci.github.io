import './Start.scss';

import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

import Button from 'components/Button';
import { Form } from '@unform/web';
import Input from 'components/Input';
import bottomLeft from 'assets/images/landing/bottom-left.svg';
import bottomRight from 'assets/images/landing/bottom-right.svg';
import topLeft from 'assets/images/landing/top-left.svg';
import topRight from 'assets/images/landing/top-right.svg';

interface Form {
  id: number;
}

type Props = React.HTMLProps<HTMLDivElement>;

const Start: React.FC<Props> = () => {
  const [section, setSection] = useState(true);

  const onSubmit = () => {};

  const landingBackground = () => (
    <section className={'background'}>
      <img className={'tl'} src={topLeft} alt="topRight" />
      <img className={'tr'} src={topRight} alt="topRight" />
      <img className={'bl'} src={bottomLeft} alt="topRight" />
      <img className={'br'} src={bottomRight} alt="topRight" />
    </section>
  );

  const greetings = () => (
    <div className="greetings">
      <header>
        <span>Bem-vindo ao </span>
        <h1>CInside</h1>
      </header>
      <footer onClick={() => setSection(!section)}>Entrar</footer>
    </div>
  );

  const credentials = () => (
    <div className={'credentials'}>
      <Form onSubmit={onSubmit} name={'credentials'}>
        <Input
          name={'registration'}
          placeholder={'digite sua matricula'}
          centered
        />
        <Button text={'entrar'} light />
      </Form>
      <footer>
        <Button text={'entrar como visitante'} />
      </footer>
    </div>
  );

  const sectionTransition = useTransition(section, null, {
    config: config.gentle,
    from: { position: 'absolute', opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return (
    <div className={'landing'}>
      {landingBackground()}
      {sectionTransition.map(({ item, key, props }) => {
        return item ? (
          <animated.div key={key} style={props}>
            {greetings()}
          </animated.div>
        ) : (
          <animated.div key={key} style={{ ...props, color: 'white' }}>
            {credentials()}
          </animated.div>
        );
      })}
    </div>
  );
};

export default Start;
