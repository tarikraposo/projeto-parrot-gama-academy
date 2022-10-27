import imgUser from "../../assets/img-general/profile-photo.png"
import { BtnProfile, DivPostFeed } from "../styled"

export default function Post() {
  return (
    <DivPostFeed>
      <div>
        <img src={imgUser} alt="" loading="lazy" />
        <textarea></textarea>
        <BtnProfile background="#6033AA;" hover="#310877;" padding="7px 50px;">publicar</BtnProfile>
      </div>
    </DivPostFeed>
  )
}