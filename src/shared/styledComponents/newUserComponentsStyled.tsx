import { Drawer, TableContainer, Typography } from "@mui/material";
import { typography } from "@mui/system";
import styled, { css } from "styled-components";

export const NewUserCompletePage=styled.div`
margin-top: 4.8%;
display: flex;
width:95%!important;
height: 70%!important;

@media (max-width: 1000px) {
  display: grid;
  margin-top:7%;
  grid-template-rows: 46%;
grid-gap: 8%;
}
@media(max-width:590px){
  display:flex !important;
 
  flex-direction: column;
  margin-top:13%;
}
`;

export const NewUser_datePicker_title_Typography = styled(Typography)`
   && {
    padding: 6%;
    padding-left: 21%;
    padding-top: 8%;
    font-weight: bold ;
    font-family: Roboto;

@media(max-width:1000px){
    padding:6%;
padding-left: 31%;
padding-top: 12%;
font-weight: bold;
}

@media(max-width:590px){
  margin-top:0%;
  padding-top:3%;
  padding-left:26%;
  padding-bottom:4%;
}
   }
`;

export const SideBar_CompaniesEnrolledTypo=styled(Typography)`
  && {
  font-family: Roboto;
      color: white;
font-size:150% ;
padding-left:5%;
font-weight: bold;
align-items: center;
padding-top: 4%;
  }
`;
export const SideBar_DateTypo=styled(Typography)`
&&{
  font-family: Roboto;
      padding-left:5% ;
      font-size:120% ;
      font-weight:bold ;
      margin-left:6% ;
      margin:5% ;
}`;
export const Sidebar_EnrollmentsTypo=styled(Typography)`
&&{
  font-family: Roboto;
padding-left: 5%;
font-size:120% ;
font-weight: bold;
margin-left: 6%;
margin: 5%;}
`;

export const NewUsertable_container_title = styled(Typography)`
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
export const NewUsersdateSelection_block=styled.div`
width: "30%";
height: "40%";
display: grid;
grid-template-rows: 46%;
grid-gap: 6%;
margin-bottom: 10px;

@media(max-width:1000px){
  display: flex;
  
      align-items: center;
      margin: 0 -2px;
}
@media(max-width:590px){
  display:flex;
  flex-direction: column;
  margin-top:0%;
  height:100%;
  justify-content: space-around;
 
  
  
}
`;
export const NewUser_chartcomponent_withsidebar=styled.div`

width: 61%;
  /* height: 80% !important  ; */
  height: 100% !important;
  margin-left: 2%;
  margin-top: 1% !important;
  padding-top: 5% !important;
  padding: 10px;
  justify-content: space-between;
  border-radius: 15px;
  /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  
  
  @media(max-width:1000px){
      width: 66%;
      height: 100% !important  ;
      margin-left: 2%;
      margin-top: 1% !important;
      padding-top: 5% !important;
      padding: 10px;
      justify-content: space-between;
      border-radius: 15px;
      /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
      box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  }
  
  
  `;

  export const CustomDrawer = styled(Drawer)({
    "& .MuiDrawer-paper": {
      width: '16%',
      backgroundColor:"white",
      border: '1px solid #ccc',
      boxShadow: '3px 3px 10px #ccc',
      borderRadius: 10,
      padding: '5px',
      marginTop:'4%',
      height:'88%',
      marginBottom:'30% !important'
    },
    "@media (max-width: 1000px)": {
      "& .MuiDrawer-paper": {
        width: '31%',
        marginTop:'58%',
        padding: '5px',
        height:"51%"
      }
    },
    "@media (max-width: 590px)": {
      "& .MuiDrawer-paper": {
        width: '70%',
        marginTop:'89%',
        padding: '5px',
        height:"47%"
      }
    }

  });
 export const StyledTableContainer = styled(TableContainer)({
    position: 'relative',
    paddingTop: '1%',
    marginTop: '14%',
    

    '@media (max-width: 590px)': {
      marginTop: '4%',
      
    },
  
  });


export const NewUser_chartcomponent_withoutsidebar=styled.div`
margin-top: 0.7% !important;
  margin-left: 2%;
  height: 80% !important ;
  /* width: 75%; */
 width:71%;
  margin-top: 0;
  padding: 10px;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
  
  @media(max-width:1000px){
    margin-top: 0.7% !important;
    margin-left: 2%;
    height: 100% !important ;
    /* width: 75%; */
   width:92%;
    margin-top: 0;
    padding: 10px;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  
  `;

  export const NewUserDatepickers=styled.div`
  /* border: 3px solid rgb(183, 177, 177); */
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  border-radius: 15px; 
  height: 105%;
  margin-top: 5%;
  width: 90%;
  margin-left: 7%;
  
  
  @media(max-width:1000px){
    border: 3px solid rgb(183, 177, 177);
    
      border-radius: 15px;
      height: 83%;
      margin-top: 3% !important;
      width: 80%;
      margin-left: 7%;
  }
  @media(max-width:590px){
    margin-top:5% !important;
    align-items:center !important;
    margin-left:0%;
    height:90%;
    margin-bottom:5%;
  }
  
  `;
  export const FromContainer=styled.div`
  padding-right: 50px;
  display: flex;
  margin-top: 5%;
  margin-right: 0%;
  justify-content: space-between;
  padding: 5px;
  
  @media(max-width:1000px){
    padding-right: 5% !important;
  display: flex;
  margin-top: 5%;
  margin-right: 0%;
  margin-left: 15%;
  justify-content: space-between;
  padding: 5px;
  }

  @media(max-width:590px){
    margin-top:0% !important;
    padding-top:0% !important;
    margin-right:10%;
    margin-left:15%;
  }
  `;
  export const ToContainer=styled.div`
  padding-right: 50px;
  display: flex;
  margin-top: 10%;
  margin-right: 0%;
  justify-content: space-between;
  padding: 5px;
  
  @media(max-width:1000px){
    padding-right: 5% !important;
      display: flex;
      margin-top: 10%;
      margin-right: 0%;
      margin-left: 15%;
      justify-content: space-between;
      padding: 5px;
  }
  @media(max-width:590px){
    margin-left:15%;
    margin-right:10%;
    margin-top:5%;
  }
  
  `;
  export const NewUser_Each_Datepicker=styled.div`
  align-items: center;
  height: 20px;
  padding: 10px;
  
  `;
  export const NewUser_submit_btn=styled.div`
   padding-left: 30%;
  margin-top: 23%;
  
  @media(max-width:1000px){
    padding-left: 36%;
      margin-top: 15%;
  }
  @media(max-width:590px){
    margin-top:10%;
    
    padding-left:35%;
    margin-bottom:4%;
  }
  `;
  export const ChartHeading_div=styled.div`
  
  display:flex;
  align-items:center;
  justify-content:center;
  font-size: 150%;
  padding-bottom: 1.5%;`;
  export const Bothbuttons=styled.div`
  justify-content: center;
  align-items: center;
  padding-left: 30% ;
  margin-right: 100px !important;
   padding-right: 17%; 
  margin: 0;
  padding-top: 5px;
  display: flex;`;
  export const NewUserTable_details=styled.div`
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
  export const  NewuserSidebar_heading=styled.div`
  background-color:#55B74E ;
border-radius:5% !important;
width:100%;
height: 8%;
align-items:center;

padding-bottom:3% ;
padding-top:0% ;
@media(max-width:1000px){
  height:11%
}

`;
export const NewUserSidebar_dateBox=styled.div`
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
padding:2% ;
margin-top:4% ;
border-radius: 5% !important;`;
interface INewUserChartProps {
  IsDrawerOpen: boolean;
}

export const NewUser_chartcomponent_withsidebardemo = styled.div<INewUserChartProps>`
margin-top: 0.7% !important;
  margin-left: 2%;
  height: 80% !important ;
  /* width: 75%; */
 width:71%;
  margin-top: 0;
  padding: 10px;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
  
  @media(max-width:1000px){
    margin-top: 0.7% !important;
    margin-left: 2%;
    height: 100% !important ;
    /* width: 75%; */
   width:92%;
    margin-top: 0;
    padding: 10px;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  ${(props) =>
    props.IsDrawerOpen &&
    css`
    width: 61%;
    /* height: 80% !important  ; */
    height: 100% !important;
    margin-left: 2%;
    margin-top: 1% !important;
    padding-top: 5% !important;
    padding: 10px;
    justify-content: space-between;
    border-radius: 15px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
    
    
    @media(max-width:1000px){
        width: 66%;
        height: 100% !important  ;
        margin-left: 2%;
        margin-top: 1% !important;
        padding-top: 5% !important;
        padding: 10px;
        justify-content: space-between;
        border-radius: 15px;
        /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
        box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
    }
    
    `};
`;

