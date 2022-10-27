import ProfilePhoto from "../../assets/img-general/profile-photo.png";
import ProfileButton from "../buttons/ProfileButton";
import Span from "../span/Span";
import { DivUser } from "../styled";

export default function User() {
  return (
    <DivUser>
      <img src={ProfilePhoto} alt="" />
      <div>
        <p>Nome Sobrenome</p>
        <Span names={[`apê82`, `user@mail.com`, `00 publicações`]}/>
      </div>
      <ProfileButton type="submit" name="editar perfil" />
    </DivUser>
  )
}