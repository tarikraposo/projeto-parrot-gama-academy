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
        <Span names={["apê 82", "user@mail.com"]}/>
      </div>
      <ProfileButton type="submit" name="editar" />
    </DivUser>
  )
}