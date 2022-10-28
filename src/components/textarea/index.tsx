import { FormEvent, useState } from "react";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import * as S from "./styles";
import { Feeds } from "../../pages/Feed";

type FeedFormProps = {
  onFeedList: any;
};
//setValue: (setValueFunc: (value: string) => void) => void;

const FeedForm = ({ onFeedList }: FeedFormProps) => {
  const [text, setText] = useState<string>("");

  function addFeed(event: FormEvent) {
    event.preventDefault();

    const feed: Feeds = {
      name: faker.name.fullName(),
      date: new Date(),
      apartament: Math.floor(Math.random() * (305 - 101 + 1) + 101),
      message: text,
      postID: uuidv4(),
      autorId: uuidv4(),
      email:faker.internet.email()
    };
    onFeedList((prevList: Feeds[]) => [...prevList, feed]);
    setText("");
  }

  return (
    <>
      <S.Forms onSubmit={addFeed}>
        <label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <button type="submit">Publicar</button>
      </S.Forms>
    </>
  );
};

export default FeedForm;
