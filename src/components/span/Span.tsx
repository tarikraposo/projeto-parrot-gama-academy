interface SpanProps {
  names: string[]
}

export default function Span(props: SpanProps) {
  
  const spanList: JSX.Element[] = [];
  props.names.forEach(name => spanList.push(<span>{name}</span>))

  return(
    <>
    {spanList}
    </>
  )
}