import Header from "../components/header/Header";
import User from "../components/user/User";
import { DivContainerProfile, MainProfile } from "../components/styled";
import UserPost from "../components/userpost/UserPost";

export default function Profile() {
  return (
    <>
      <Header />
        <MainProfile>

          <DivContainerProfile padding="45px 25px 40px 25px;">
            <User />
          </DivContainerProfile>

          <UserPost name="Nome - apê 82" date="00/00/2022 00:00" postText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
          <UserPost name="Nome - apê 82" date="00/00/2022 00:00" postText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
          <UserPost name="Nome - apê 82" date="00/00/2022 00:00" postText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
          
        </MainProfile>
    </>
  )
}