import LogoHeader from "../../assets/img-header/logo-h-colorido.png";

import { HeaderUser, Navigation, ImgLogo, Ulist } from "../styled";
export default function Header() {
  return (
    <>
      <HeaderUser>
        <Navigation>
          <div>
            <a href="/feed"><ImgLogo src={LogoHeader} alt="" /></a>
          </div>
          <Ulist>
            <li><a href="/profile">Olá, Usuário</a></li>
            <li><a href="/login">Sair</a></li>
          </Ulist>
        </Navigation>
    </HeaderUser>
    </>
  )
}