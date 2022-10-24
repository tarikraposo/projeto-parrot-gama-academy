
import { Header } from "../../components/header";
import * as S from "./styles"

type FeedProps = {
    children: React.ReactNode;
}


const Feed = ({children}:FeedProps) => {
    return (

        <S.Container>
            <Header></Header>
            <main>
                {children}
            </main>
        </S.Container>
    );
}

export default Feed;