import { useParams } from "react-router-dom";
import usersList from "../../mocks/feeds.json";
import * as S from "./styles";
import { Header } from "../../components/header";
import Willy from "../../assets/willy.png";

// type ProfileProps = {
//   name: string;
//   apartament: number;
//   date: Date;
//   message: string;
//   postID: string;
//   autorID: string;
//   email: string;
// };

export const Profile = () => {
  const { feeds } = usersList;
  let { autorId } = useParams();

  return (
    <S.Container>
      <Header />
      <main>
        {feeds.map((user) => {
          return (
            <div className="container">
              <div className="profile" key={user.autorId}>
                <div>
                  <img src={Willy} alt="Profile icon" />
                </div>
                <div>
                  <p className="name">{user.name}</p>
                  <p>{user.apartament}</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <p className="message">{user.message}</p>
            </div>
          );
        })}
      </main>
    </S.Container>
  );
};
