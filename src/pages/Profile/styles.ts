import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;
        border: 1px solid #C5C5C5;
        width: 700px;
        margin: 0 auto;
        .container {
            width: 100%;
        }

        .name {
        font-size: 16px;
        color: #76BB4C;
        }
        .profile {
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #C5C5C5;
            column-gap: 30px;
            padding: 30px 0px 30px 0px;
        }
        img {
            padding-left: 26px;
        }
        
    }

`