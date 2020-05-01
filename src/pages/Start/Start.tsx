import './Start.scss';

import React, { useState } from 'react';

import Button from 'components/Button';
import { Form } from '@unform/web';
import { ParticleCanvas } from './Particles';
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
  };

  return (
    <div className={'landing'}>
      <header>
        <h1>Welcome to CInside</h1>
      </header>
      <section>
        <ParticleCanvas />
      </section>
      <section className={'description'}>
        <Button text={'Overview'} />
        <Button text={'About'} />
        <p>Descrição do CInside</p>
      </section>
      {/* <Form className={'credentials'} onSubmit={onSubmit}>
        <section>
          <Input
            // label={'Matricula'}
            type={'number'}
            name={'id'}
            placeholder={'type your registration'}
            full
          />
          <Button text={'ENTER'} type={'submit'} />
        </section>
        <Button text={"I'M JUST A GUEST"} type={'submit'} />
      </Form> */}
    </div>
  );
};

export default Start;
