import Input from "../components/input/Input";
import logo from "../assets/img-login/logo.png";
import FormButton from "../components/button/FormButton";
import "./styles/form.css";

export default function Register(){
  return(
    <div className="form-container">
      <div><img src={logo} alt="" /></div>
      <form>
        <fieldset>
          <legend>CADASTRO</legend>
          <Input type="text" placeholder="nome" />
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <Input type="password" placeholder="confirmar senha" />
          <Input type="text" placeholder="unidade/apartamento" />
          <Input type="text" placeholder="link da foto" />
          <FormButton type="submit" name="entrar"/>
        </fieldset>
      </form>
    </div>
  )
}