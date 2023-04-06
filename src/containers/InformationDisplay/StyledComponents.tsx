import { TableContainer, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledTableBody=styled.div`
  /* border: 3px solid rgb(183, 177, 177); */
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  height: 94%;
  margin-top: 5%;
  width: 90%;
  margin-left: 7%;
  
  
  
  @media(max-width:1000px){
      border: 3px solid rgb(183, 177, 177);
      border-radius: 15px;
      height: 83%;
      margin-top: 5% !important;
      width: 89%;
      margin-left: 0%;
      margin-right: 5%;
      margin-bottom: 2%;
  }
  @media(max-width:590px){
   
   
    padding-top:0% !important;
    margin-top:20% !important;
    align-items:center;
    margin-left:10% !important;
    width:80%;
    margin:0% !important;
    margin-bottom:0% !important;
    
  }
  

  `;

  export const StyledTitle = styled(Typography)`
   && {
    padding: 5%;
    padding-left: 17%;
    margin-top: 3% !important ;
    padding-bottom: 1%;
    font-weight:bold;
    font-family: Roboto;


@media(max-width:1000px){
    padding: 4%;
      padding-left: 24%;
      position: relative;
      margin-top: 4% !important ;
      padding-bottom: 1%;
      font-weight: bold;
}
@media(max-width:590px){
  margin-top:0 !important;
  align-items:center;
 padding-left:21%;
}
   }
`;

export const StyledTableContainer = styled(TableContainer)({
    position: 'relative',
    paddingTop: '1%',
    marginTop: '14%',
    
'@media (max-width: 590px)': {
      marginTop: '4%',
      
    },
  
  });