import { InputForm } from "../styled"

type InputProps = {
  type: string,
  placeholder: string,
}

export default function Input(props: InputProps){
  return (
    <InputForm className="input" type={props.type} placeholder={props.placeholder}/>
  )
}