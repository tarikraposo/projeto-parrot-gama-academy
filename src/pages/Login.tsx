import Input from "../components/input/Input";
import logo from "../assets/img-login/logo.png";
import FormButton from "../components/buttons/FormButton";
import { DivContainer, SectionContainer } from "../components/styled";

import "./styles/form.css";

export default function Login(){
  return (
    <SectionContainer>
      <DivContainer>
        <div className="div-logo"><img src={logo} alt="" /></div>
        <form className="form">
          <h1>LOGIN</h1>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <FormButton type="submit" name="entrar" />
          <a href="" className="link">cadastre-se</a>
        </form>
      </DivContainer>
    </SectionContainer>
  )
}