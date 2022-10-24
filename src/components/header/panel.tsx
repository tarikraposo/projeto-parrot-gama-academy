import * as S from "./panel.styles"
import Link from "react-router-dom"

export const Panel = () => {

    return (
        <S.Container>
            Olá, usuário | <a href="#">sair</a>

        </S.Container>
    );
}