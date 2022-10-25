import logoParrot from "../../assets/logo-header.png";
import { LogoHeader } from "./logo.style";

const Logo = () => {
    
    return (

        <LogoHeader><img src={logoParrot} alt="logo-parrot-header"/></LogoHeader>
    );
}

export default Logo;