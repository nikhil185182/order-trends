import styled from "styled-components";
// import {makeStyles} from '@mui/material/styles';


// const useStyles = makeStyles({
//   active : {
//     backgroundColor: 'green',
//     color: 'white',
//   },
//   inactive : {
//     backgroundColor: 'white',
//     color: 'green',
//   }
// });


export const StyledStatisticsTab = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const StyledChartCustomise = styled.div`
    margin-top: 25px;
    width: 2vw%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-family: "Times New Roman", Times, serif;
`;

export const StyledDaysCustomise = styled.div`
    margin-top: 20px;
    width:45vw;
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

export const StyledStatisticsGraph = styled.div`
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