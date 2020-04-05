import React from "react";
import "./Start.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

interface Props {
  id: string;
}

const Start: React.FC<Props> = () => {
  return (
    <div className={"start"}>
      <div className={"start__container"}>
        <div>
          <span className={"start__title"}>Bem vindo!</span>
          <br />
          <span className={"start__subtitle"}>
            É um estudante ou professor?
          </span>
        </div>
        <div>
          <Input placeholder={"Matricula:"} />
          <Button text={"Entrar"} />
        </div>
        <span className={"start__guest"}>Entrar como visitante</span>
      </div>
    </div>
  );
};

export default Start;
