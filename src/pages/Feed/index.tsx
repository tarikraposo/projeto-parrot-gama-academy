import React from 'react'
import Willy from "../../assets/Willy.png";
import { Header } from "../../components/header";
import FeedForm from '../../components/textarea';
import * as S from "./styles";

type FeedProps = {
    children: React.ReactNode;
}

const Feed = ({children}:FeedProps) => {
    return (

        <S.Container>
            <Header></Header>
            <main>
                {children}
               <div>
                    <img src={Willy} alt="Profile icon"/>
                    <FeedForm/>
                </div> 
            </main>
        </S.Container>
    );
}

export default Feed;