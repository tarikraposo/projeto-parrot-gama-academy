import Logo from "./logo";
import { Panel } from "./panel";
import * as S from "./styles"



export const Header = () => {
    return (
        <S.Nav>
            <Logo/>
            <Panel/>
        </S.Nav>
    );
}