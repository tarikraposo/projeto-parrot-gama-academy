import Header from "../components/header/Header";
import User from "../components/user/User";
import { DivContainerProfile } from "../components/styled";

export default function Profile() {
  return (
    <>
    <Header/>
    <main>
      <DivContainerProfile padding="45px 25px 60px 25px;">
        <User/>
      </DivContainerProfile>
      <DivContainerProfile padding="45px 25px 60px 25px;"/>
    </main>
    </>
  )
}