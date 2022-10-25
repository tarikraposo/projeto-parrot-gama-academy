import {BtnProfile} from "../styled"

type BtnProfileProps = {
  name: string;
  type: "submit" | "button";
}

export default function ProfileButton(props: BtnProfileProps){
  return (
    <BtnProfile type={props.type}>{props.name}</BtnProfile>
  )
}