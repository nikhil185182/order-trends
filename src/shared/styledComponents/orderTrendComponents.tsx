import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const ORDER_TREND_BOX = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:70px;
`;

export const STATISTICS_TAB = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const CHART_CUSTOMISE = styled.div`
    margin-top: 25px;
    width: 2vw%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Times New Roman", Times, serif;
`;

export const DAYS_CUSTOMISE = styled.div`
    margin-top: 20px;
    width:50vw;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    background-color: aqua;
    // @media (max-width:700px){
    //     flex-direction:column;
    //     justify-content: space-between;
    //     height:20%;
    //     width:15%;
    // }
`;

export const COMPARE_TAB = styled.div`
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

export const STATISTICS_GRAPH = styled.div`
position: relative; 
margin: auto;
height: 63vh;
width: 100%;
@media(max-width:700px){
    height:50vh;
}
@media(max-width:1100px){
    height:60vh;
}
// background-color: aqua;
`;

export const COMPARE_GRAPH = styled.div`
    position: relative; 
    margin: auto;
    height: 50vh;
    width: 75%;
`;

export const COMPARE_DATEPICKER = styled.div`
    border: 2px;
    border-radius: 10px;
    padding: 20px;
    width: 20%;
    // background-color: aqua;
    // align-items: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    @media(max-width:900px){
        width:70%;
        align-items: center;
    }
    
`;

export const DATELIST_BOX = styled.div`
    width: 100%;
    justify-content: center;

    display: flex;
    flex-wrap:wrap;
    font-size: small;
    max-height: 380px;
    overflow-y: auto;
    overflow-x: auto;
    // background-color: aqua;
`;

