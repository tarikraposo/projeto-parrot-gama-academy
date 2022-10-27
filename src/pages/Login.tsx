import { FormEvent, useState } from "react";
import logo from "../assets/img-login/logo.png";
import { ButtonForm, DivContainer, Form, InputForm, LinkForm, SectionContainer } from "../components/styled";

import "./styles/form.css";

export default function Login(){
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function userLogin(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <SectionContainer>
      <DivContainer>
        <div className="div-logo"><img src={logo} alt="" /></div>
        <Form onSubmit={userLogin}>
          <h1>LOGIN</h1>
          <InputForm type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <InputForm type="password" placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <ButtonForm type="submit">entrar</ButtonForm>
          <LinkForm href="/users">cadastre-se</LinkForm>
        </Form>
      </DivContainer>
    </SectionContainer>
  )
}