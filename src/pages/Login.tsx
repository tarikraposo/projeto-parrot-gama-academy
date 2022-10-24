import Input from "../components/input/Input";
import logo from "../assets/img-login/logo.png";
import FormButton from "../components/buttons/FormButton";
import { DivContainer, Form, LinkForm, SectionContainer } from "../components/styled";

import "./styles/form.css";

export default function Login(){
  return (
    <SectionContainer>
      <DivContainer>
        <div className="div-logo"><img src={logo} alt="" /></div>
        <Form>
          <h1>LOGIN</h1>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <FormButton type="submit" name="entrar" />
          <LinkForm href="/cadastrar">cadastre-se</LinkForm>
        </Form>
      </DivContainer>
    </SectionContainer>
  )
}