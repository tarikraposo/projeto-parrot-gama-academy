import Input from "../components/input/Input";
import logo from "../assets/img-login/logo.png";
import FormButton from "../components/buttons/FormButton";
import { DivContainer, Form, SectionContainer } from "../components/styled";

import "./styles/form.css";

export default function Register(){
  return(
    <SectionContainer>
      <DivContainer>
        <div className="div-logo"><img src={logo} alt="" /></div>
        <Form>
          <h1>CADASTRO</h1>
          <Input type="text" placeholder="nome" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <Input type="password" placeholder="confirmar senha" />
          <Input type="text" placeholder="unidade/apartamento" />
          <Input type="text" placeholder="link da foto" />
          <FormButton type="submit" name="entrar" />
        </Form>
      </DivContainer>
    </SectionContainer>
  )
}