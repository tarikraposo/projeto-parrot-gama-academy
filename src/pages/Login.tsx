import Input from "../components/input/Input";
import logo from "../assets/img-login/logo.png";
import FormButton from "../components/button/FormButton";
import "./styles/form.css";

export default function Login(){
  return (
    <div className="form-container">
      <div><img src={logo} alt="" /></div>
      <form>
        <fieldset>
          <legend>LOGIN</legend>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="senha" />
          <FormButton type="submit" name="entrar" />
        </fieldset>
      </form>
    </div>
  )
}
