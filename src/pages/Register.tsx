import { useState } from "react";
import logo from "../assets/img-login/logo.png";
import FormButton from "../components/buttons/FormButton";
import { DivContainer, Form, InputForm, SectionContainer } from "../components/styled";

import "./styles/form.css";
import { FormEvent } from "react";

export default function Register(){
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [apartament, setapartament] = useState<string>("");
  const [link, setLink] = useState<string>("");
  
  function registerUser(event: FormEvent){
    event.preventDefault()
  }

  return(
    <SectionContainer>
      <DivContainer>
        <div className="div-logo"><img src={logo} alt="" /></div>
        <Form onSubmit={registerUser}>
          <h1>CADASTRO</h1>
          <InputForm type="text" placeholder="nome" value={name} onChange={(event) => setName(event.target.value)}/>
          <InputForm type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <InputForm type="password" placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
          <InputForm type="password" placeholder="confirmar senha" value={confirmPassword} onChange= {(event) =>setConfirmPassword(event.target.value)}/>
          <InputForm type="text" placeholder="unidade/apartamento" value={apartament} onChange={(event) => setapartament(event.target.value)}/>
          <InputForm type="text" placeholder="link da foto"value={link} onChange={(event) => setLink(event.target.value)}/>
          <FormButton type="submit" name="entrar" />
        </Form>
      </DivContainer>
    </SectionContainer>
  )
}