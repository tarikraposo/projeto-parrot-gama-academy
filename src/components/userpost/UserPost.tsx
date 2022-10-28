import imgUser from "../../assets/img-general/profile-photo.png";
import { DivPost } from "../styled";

type UserPostProps = {
  name: string;
  date: string;
  postText: string;
}


export default function UserPost(props: UserPostProps){
  return (
    <DivPost >
      <img src={imgUser} alt="" />
      <div>
        <h2>{props.name}</h2>
        <span>{props.date}</span>
        <p>{props.postText}</p>
      </div>
    </DivPost>
  )
}