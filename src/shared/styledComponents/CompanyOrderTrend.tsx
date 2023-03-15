import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 5%;

    @media (max-width:820px){
        flex-direction:column;
        justify-content: space-between;
    }
`