import ProfilePhoto from "../../assets/img-general/profile-photo.png";
import Span from "../span/Span";
import { BtnProfile, DivUser } from "../styled";

export default function User() {
  return (
    <DivUser>
      <img src={ProfilePhoto} alt="" />
      <div>
        <p>Nome Sobrenome</p>
        <Span names={[`apê82`, `user@mail.com`, `00 publicações`]}/>
      </div>
      <BtnProfile background="#76BB4C;" padding="7px 20px;" type="submit">editar perfil</BtnProfile>
    </DivUser>
  )
}