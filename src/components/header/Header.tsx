import logoHeader from "../../assets/img-header/logo-horizontal-colorido.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <img src={logoHeader} alt="" />
        </div>
        <ul>
          <li><a href="">Olá, Usuário</a></li>
          <li><a href="">Sair</a></li>
        </ul>
      </nav>
    </header>
  )
}