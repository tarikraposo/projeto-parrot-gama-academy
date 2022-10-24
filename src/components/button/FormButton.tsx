type ButtonProps = {
  type: "submit" | "button",
  name: string,
}

export default function FormButton(props: ButtonProps){
  return (
    <button type={props.type}>{props.name}</button>
  )
}