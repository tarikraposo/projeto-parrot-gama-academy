import Header from "../components/header/Header";
import Post from "../components/post/Post";
import { DivContainerProfile, MainProfile } from "../components/styled";
import UserPost from "../components/userpost/UserPost";

import testApi from "../assets/testapi.json"

export default function Feed(){

    const postsUsers = testApi.vizinhos.map((vizinho) => {
      return<UserPost name={`${vizinho.nome} apê - ${vizinho.ap}`} date={vizinho.timestamp} postText={vizinho.post}/>
    })

  return (
    <>    
      <Header/>
      <MainProfile>
        <DivContainerProfile padding="45px 25px 40px 25px;">
          <Post/>
        </DivContainerProfile>
        <>
        {postsUsers}
        </>
      </MainProfile>
    </>
  )
}