import Willy from "../../assets/willy.png";
import { Feeds } from "../../pages/Feed";
import Container from "./styles";

type FeedListProps = {
  feedList: Feeds[];
};

const FeedList = ({ feedList }: FeedListProps) => {
  return (
    <Container>
      <div className="postContainer">
        {feedList
          .sort((a, b) => b.date - a.date)
          .map((feed) => {
            return (
              <div key={feed.postID} className="feedPost">
                <img src={Willy} alt="Profile icon" />
                <div key={feed.postID}>
                  <p className="name">
                    {feed.name} - {feed.apartament}
                  </p>
                  <span className="date">{feed.date.toDateString()}</span>
                  <p className="message">{feed.message}</p>
                </div>
              </div>
            );
          })}
      </div>
    </Container>
  );
};

export default FeedList;
