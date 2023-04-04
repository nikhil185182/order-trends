import styled from "styled-components";
import { Button as MButton} from "@mui/material";


export const StatisticsTab = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const ChartCustomise = styled.div`
    margin-top: 25px;
    width: 2vw%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Times New Roman", Times, serif;
`;

export const DaysCustomise = styled.div`
    margin-top: 20px;
    width:50vw;
    display: flex;
    justify-content: space-between;
    align-items:center;
    flex-wrap: wrap;
    // @media (max-width:700px){
    //     flex-direction:column;
    //     justify-content: space-between;
    //     height:20%;
    //     width:15%;
    // }
`;

export const StatisticsGraph = styled.div`
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