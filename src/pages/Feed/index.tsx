import React from 'react'
import Willy from "../../assets/Willy.png";
import FeedList from '../../components/feedList';
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
               <div className='posts'>
                    <img src={Willy} alt="Profile icon"/>
                    <FeedForm/>
                </div> 
                <FeedList>
            
                </FeedList>
            </main>
            
        </S.Container>
        

    );
}

export default Feed;