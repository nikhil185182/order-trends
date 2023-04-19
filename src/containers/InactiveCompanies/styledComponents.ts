import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
`;

export const Totalcomponent = styled.div`
    display: flex;
    margin-top: 2%;
    @media(max-width:700px){
      display: flex;
      flex-direction:column;
      margin-top:100px;
    }
    @media(max-width:1100px){
      display: flex;
      flex-direction:column;
      margin-top:100px;
    }
    @media(max-width:2300px){
      display: flex;
      flex-direction:column;
      margin-top:100px;
    }
`;

export const Direction = styled.div`
margin-right:300px!important;
@media(max-width:820px){
  display: none;
}
`;

export const Stepper = styled.div`
margin-left:-70px!important;
@media(max-width:820px){
  display: none;
}
`;

export const Switchbox = styled.div`
margin-top:-25px;
@media(max-width:820px){
  display: none;
}
`;

export const InactiveUsertablecontainer = styled.div`
margin-top:-540px;
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
    margin-top:700px;
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
  margin-right: 100px;
  padding: 50px;
  margin-left:30px;
  margin-bottom: 12px;
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  float: 'left';

  @media(max-width: 1400px) {
    margin-right: 0;
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
`;

export const Inactivetable = styled.div`
    box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px !important;
    width: 900px;
    padding: 20px;
    border-radius: 10px!important;
    margin-top:-235px;
    margin-left: 5%;
    margin-bottom: 5%;
`;

export const Submitbutton = styled.div`
margin-top: 18%;

`;

