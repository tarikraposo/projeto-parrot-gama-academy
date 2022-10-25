import LogoHeader from "../../assets/img-header/logo-h-colorido.png";

import { HeaderUser, Navigation, ImgLogo, Ulist } from "../styled";
export default function Header() {
  return (
    <>
      <HeaderUser>
        <Navigation>
          <div>
            <ImgLogo src={LogoHeader} alt="" />
          </div>
          <Ulist>
            <li><a href="">Olá, Usuário</a></li>
            <li><a href="">Sair</a></li>
          </Ulist>
        </Navigation>
    </HeaderUser>
    </>
  )
}