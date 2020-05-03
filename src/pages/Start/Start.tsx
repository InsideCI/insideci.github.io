import './Start.scss';

import React, { useState } from 'react';

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
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState<Student>();

  const onSubmit: SubmitHandler<Form> = (formData) => {
    StartAPI.get(formData.id).then((response) => {
      setLoaded(true);
      setUser(response.data);
    });
    console.log({ loaded, user });
  };

  return (
    <div className={'landing'}>
      <header>CInside</header>

      <Form onSubmit={onSubmit}>
        <section className={'credentials'}>
          <Input
            name={'id'}
            type={'number'}
            placeholder={'registration'}
            small
            full
          />
          <Button text={'ENTER'} type={'submit'} light />
          <Button text={'enter as a guest'} type={'submit'} light faded />
        </section>
      </Form>
      <a href={'https://github.com/InsideCI/insideci.github.io'}>github</a>
    </div>
  );
};

export default Start;
