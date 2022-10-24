import { ButtonForm } from "../styled";

type ButtonProps = {
  type: "submit" | "button",
  name: string,
}

export default function FormButton(props: ButtonProps){
  return (
    <ButtonForm type={props.type}>{props.name}</ButtonForm>
  )
}