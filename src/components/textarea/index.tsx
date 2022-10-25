import { useState } from "react";
import * as S from "./styles";

const FeedForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event:React.FormEvent<Element>) => {
    event.preventDefault();
  }

  return (
    <>
      <S.Forms onSubmit={handleSubmit}>
        <label>
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit">Publicar</button>
      </S.Forms>
      
    </>
   
  )
}

export default FeedForm;
