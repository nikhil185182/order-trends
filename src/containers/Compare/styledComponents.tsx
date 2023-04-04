import styled from "styled-components";

export const CompareTab = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start;
    @media(max-width:900px){
        flex-direction: column;
        justify-content: space-between;
        align-items:center;
    }
`;


export const CompareGraph = styled.div`
    position: relative; 
    margin: auto;
    height: 75vh;
    width: 75%;
`;

export const ComparePicker = styled.div`
    border: 2px;
    border-radius: 10px;
    padding: 20px;
    width: 15%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    @media(max-width:900px){
        width:70%;
        align-items: center;
    }
    
`;

export const DateListBox = styled.div`
    width: 100%;
    margin-top:5px;
    justify-content: center;
    display: inline-flex;
    flex-wrap:wrap;
    font-size: small;
    max-height: 380px;
    overflow-y: auto;
    overflow-x: auto;
`;