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

export const SubContainerOne = styled.div`
    width: 25%;
    margin: 1%;
    padding: 1%;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`