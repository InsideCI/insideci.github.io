import React, { useState } from 'react';
import './Start.scss';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { StartAPI } from './store';
import { Student } from 'store/types/models';

interface Form {
  id: number;
}

type Props = JSX.IntrinsicElements['div'];

const Start: React.FC<Props> = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState<Student>();

  const onSubmit: SubmitHandler<Form> = (formData) => {
    StartAPI.get(formData.id).then((response) => {
      setLoaded(true);
      setUser(response.data);
    });
  };

  return (
    <>
      <div className={'start'}>
        <div className={'start__container'}>
          {loaded ? (
            <div>bem vindo {user?.nome.split(' ')[0]}</div>
          ) : (
            <>
              <div>
                <span className={'start__title'}>Bem vindo!</span>
                <br />
                <span className={'start__subtitle'}>
                  É um estudante ou professor?
                  <br />
                  Insira sua matricula abaixo
                </span>
              </div>
              <div>
                <Form onSubmit={onSubmit}>
                  <Input
                    type={'number'}
                    name={'id'}
                    placeholder={'Matricula:'}
                  />
                  <Button text={'Entrar'} type={'submit'} />
                </Form>
              </div>
              <span className={'start__guest'}>Entrar como visitante</span>{' '}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Start;
