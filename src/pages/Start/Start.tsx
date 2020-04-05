import React from 'react';
import './Start.scss';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';

interface Form {
  id: string;
}

type Props = JSX.IntrinsicElements['div'];

const Start: React.FC<Props> = () => {
  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
  };

  return (
    <div className={'start'}>
      <div className={'start__container'}>
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
            <Input name={'id'} placeholder={'Matricula:'} />
            <Button text={'Entrar'} type={'submit'} />
          </Form>
        </div>
        <span className={'start__guest'}>Entrar como visitante</span>
      </div>
    </div>
  );
};

export default Start;
