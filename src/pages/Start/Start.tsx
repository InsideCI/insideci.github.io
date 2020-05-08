import './Start.scss';

import React, { useState } from 'react';
import { animated, config, useTransition } from 'react-spring';

import Button from 'components/Button';
import { Form } from '@unform/web';
import Input from 'components/Input';
import { StartAPI } from './store';
import { Student } from 'store/types/models';
import { SubmitHandler } from '@unform/core';

interface Form {
  id: number;
}

type Props = React.HTMLProps<HTMLDivElement>;

const Start: React.FC<Props> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({});
  const [user, setUser] = useState<Student>();
  const [section, setSection] = useState(true);

  const onSubmit: SubmitHandler<Form> = (formData) => {
    StartAPI.get(formData.id)
      .then((response) => {
        setLoading(true);
        setUser(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    console.log({ loading, user, error });
  };

  const registrationForm = () => (
    <>
      <Form onSubmit={onSubmit} className={'credentials'}>
        <Input
          name={'id'}
          type={'number'}
          placeholder={'registration'}
          small
          full
        />
        <Button text={'ENTER'} type={'submit'} light />
        <Button text={'enter as a guest'} type={'submit'} light faded />
      </Form>
      <Button text={'github'} onClick={() => setSection(!section)} light />
    </>
  );

  const presensation = () => <>comé que ta por ai papai</>;

  const sectionTransition = useTransition(section, null, {
    config: config.gentle,
    from: { position: 'absolute', opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  });

  return (
    <div className={'landing'}>
      <header>CInside</header>
      {sectionTransition.map(({ item, key, props }) => {
        return item ? (
          <animated.div key={key} style={props}>
            {registrationForm()}
          </animated.div>
        ) : (
          <animated.div key={key} style={{ ...props, color: 'white' }}>
            {presensation()}
          </animated.div>
        );
      })}
    </div>
  );
};

export default Start;
