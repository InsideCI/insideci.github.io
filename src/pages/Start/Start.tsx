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
  };

  return (
    <>
      <div className={'landing'}>
        <Form onSubmit={onSubmit}>
          <Input
            label={'Matricula'}
            type={'number'}
            name={'id'}
            placeholder={'type your registration'}
          />
          <Button text={'ENTRAR'} type={'submit'} />
        </Form>
      </div>
    </>
  );
};

export default Start;
