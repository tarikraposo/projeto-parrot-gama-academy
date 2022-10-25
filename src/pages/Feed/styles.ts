import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    
    
    main {
        flex: 1;
        display: flex;
        align-items: baseline;
        justify-content: center;
        border: 1px solid #C5C5C5;
        width: 700px;
        margin: 0 auto;
        
        

        div {
            margin-top: 45px;
            display: flex;
            align-items: flex-start;
            padding: 30px;
            border-bottom: 1px solid #C5C5C5;
            
            

            img {
                margin-right: 28px;
                height: 70px;
            }
        }
    }


`