import styled from "styled-components";

export const Direction = styled.div`
margin-right:350px!important;
@media(max-width:1400px){
  display: none;
}
`;

export const Stepper = styled.div`
margin-left:-85px!important;
@media(max-width:1400px){
  display: none;
}
`;

export const Switchbox = styled.div`
margin-top:-25px;
`;

export const InactiveUsertablecontainer = styled.div`
margin-top:-542px;
height:530px;
border-radius: 10px!important;
box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px !important;
    width: 900px;
    padding: 20px;
  margin-left:320px;

  @media(max-width:700px){
    display: flex;
    flex-direction:column;
    width:40%;
    margin-top:100px;
  }
  @media(max-width:1400px){
    flex-direction:column;
    width: 40%;
    margin-top:300px;
    margin-right:300px;
  }
`;

export const Heading = styled.div`
    height: 5px!important;
`;

export const Datepickercomponent = styled.div`
  align-items: left;
  display: inline-block;
  width: 12%;
  height: 100px;
  margin-top: 20px;
  margin-right: 200px;
  padding: 50px;
  margin-left:10px;
  margin-bottom: 12px;
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  float: 'left';

  @media(max-width: 1400px) {
    margin-right: 0;
    margin-left:600px;
  }

  @media(max-width: 700px) {
    margin-right: 0;
  }
`;


export const Rows = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Innerrows = styled.div`
    width: 100%;
`;

export const Searchbar = styled.div`
    width: 50%;
    float: right;
    margin: 1%;
`;

export const Datepicker = styled.div`
width:150px;
    margin-top: 5% !important;
    margin-left:-20px;
    display: grid;
    @media(max-width: 1400px) {
      pedding-left:20px;
    }
  
    @media(max-width: 700px) {
      padding:10px;
    }
`;

export const Inactivetable = styled.div`
    
    
    margin-top:-235px;
    margin-left: 5%;
    margin-bottom: 5%;
`;

export const Submitbutton = styled.div`
margin-top: 18%;

`;
