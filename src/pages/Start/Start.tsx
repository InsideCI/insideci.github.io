import './Start.scss';

import { AnimatedValue, animated, config, useTransition } from 'react-spring';
import React, { CSSProperties, useState } from 'react';

import Button from 'components/Button';
import { Form } from '@unform/web';
import Input from 'components/Input';
import { NewGenericClient } from '../../store/client';
import { Student } from 'store/types/models';
import { SubmitHandler } from '@unform/core';
import bottomLeft from 'assets/images/landing/bottom-left.svg';
import bottomRight from 'assets/images/landing/bottom-right.svg';
import { capitalize } from 'underscore.string';
import topLeft from 'assets/images/landing/top-left.svg';
import topRight from 'assets/images/landing/top-right.svg';

interface Form {
  id: number;
}

const client = NewGenericClient<Student>('students');

type Props = React.HTMLProps<HTMLDivElement>;

const Start: React.FC<Props> = () => {
  const [section, setSection] = useState(0);
  const [error, setError] = useState(false);
  const [guest, setGuest] = useState(false);
  const [student, setStudent] = useState<Student>();

  const onSubmit: SubmitHandler<Form> = ({ id }) => {
    if (id)
      client
        .get(id)
        .then((response) => {
          setStudent(response.data);
          setSection(2);
        })
        .catch((error) => {
          setError(true);
          console.log(error);
        });
  };

  const background = () => (
    <section className={'background'}>
      <img className={'tl'} src={topLeft} alt="topLeft" />
      <img className={'tr'} src={topRight} alt="topRight" />
      <img className={'bl'} src={bottomLeft} alt="bottomLeft" />
      <img className={'br'} src={bottomRight} alt="bottomRight" />
    </section>
  );

  const welcome = (key: string, style: AnimatedValue<CSSProperties>) => (
    <animated.div key={key} style={style} className="welcome">
      <header>
        <span>Bem-vindo ao</span>
        <h1>CInside</h1>
      </header>
      <footer>
        <Button full text={'Entrar'} onClick={() => setSection(1)} />
      </footer>
    </animated.div>
  );

  const credentials = (key: string, style: AnimatedValue<CSSProperties>) => (
    <animated.div key={key} style={style} className={'credentials'}>
      <Form onSubmit={onSubmit} name={'credentials'}>
        <Input name={'id'} placeholder={'digite sua matricula'} centered />
        <Button text={'entrar'} light />
      </Form>
      {error && <section>deu bode morales</section>}
      <footer>
        <Button
          onClick={() => setGuest(true)}
          full
          text={'entrar como visitante'}
        />
      </footer>
    </animated.div>
  );

  const greetings = (key: string, style: AnimatedValue<CSSProperties>) => {
    return (
      <animated.div key={key} style={style} className={'greetings'}>
        {student && (
          <span>
            Olá {capitalize(student.nome.split(' ')[0].toLowerCase())}
          </span>
        )}
      </animated.div>
    );
  };

  const sections = [
    { id: 0, component: welcome },
    { id: 1, component: credentials },
    { id: 2, component: greetings },
  ];

  const sectionTransition = useTransition(
    sections[section],
    (item) => item.id,
    {
      config: config.slow,
      from: {
        position: 'absolute',
        opacity: 0,
        transform: 'translate3d(100%,0,0)',
      },
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    }
  );

  return (
    <div className={'landing'}>
      {background()}
      {sectionTransition.map(({ item, props, key }) =>
        item.component(key, props)
      )}
    </div>
  );
};

export default Start;
