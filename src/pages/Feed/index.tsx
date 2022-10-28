import React from "react";
import Willy from "../../assets/Willy.png";
import { useState } from "react";
import FeedList from "../../components/feedList";
import { Header } from "../../components/header";
import FeedForm from "../../components/textarea";
import * as S from "./styles";

type FeedProps = {
  // children: JSX.Element;
};

export type Feeds = {
  postID: string;
  autorId: string;
  name: string;
  date: Date;
  apartament: number;
  message: string;
  email: string,
};

const Feed = (props: FeedProps) => {
  const [feedList, setFeedList] = useState<Feeds[]>([]);

  console.log(feedList);
  return (
    <S.Container>
      <Header></Header>
      <main>
        {/* {children} */}
        <div className="posts">
          <img src={Willy} alt="Profile icon" />
          <FeedForm onFeedList={setFeedList} />
        </div>
        <FeedList feedList={feedList} />
      </main>
    </S.Container>
  );
};

export default Feed;
