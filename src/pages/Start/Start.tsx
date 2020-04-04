import React from 'react';
import './Start.scss'
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Start: React.FC = () => {

  return (
    <div className={'Start'}>
      <div className={'Start__container'}>
        <div>
          <span className={'Start__title'}>Bem vindo!</span><br/>
          <span className={'Start__subtitle'}>É um estudante ou professor?</span>
        </div>
        <div>
          <Input placeholder={"Matricula:"}/>
          <Button text={"Entrar"} />
        </div>
        <span className={'Start__guest'}>
          Entrar como visitante
        </span>
      </div>
    </div>
  );
};

export default Start;