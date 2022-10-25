import styled from "styled-components";

const Container = styled.div `

    .postContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 700px;
    }
    .feedPost {
        display: flex;
        border-bottom: 1px solid #C5C5C5;
        width: 100%;
        padding: 35px 0px 47px 26px;
        column-gap: 21px;
       
    }
    .name {
        font-size: 16px;
        color: #76BB4C;
    }
    .date {
        font-size: 14px;
        line-height: 14px;
        color: #919191;
    }
    .message {
        margin-top: 8px;
    }
`

export default Container;