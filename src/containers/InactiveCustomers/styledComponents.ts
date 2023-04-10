import { FormControl } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
`;

export const Total_component = styled.div`
    display: flex;
    margin-top: 5%;
    @media(max-width:820px){
      display: flex;
      flex-direction:column;
    }
`;

export const Direction = styled.div`
@media(max-width:820px){
  display: none;
}
`;

export const InactiveUsertable_container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px!important;
  width: 90%;
  margin-left:120px;
  margin-bottom: 100px!important;
`;

export const Heading = styled.div`
    height: 5px!important;
`;

export const Datepicker_component = styled.div`
    align-items: left;
    display: inline-block;
    width: 10%;
    height: 100px;
    margin-top: 20px;
    margin-right: 1100px;
    padding: 50px;
    margin-bottom: 12px;
    box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    float: 'left';
`;

export const Rows = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Inner_rows = styled.div`
    width: 100%;
`;

export const Search_bar = styled.div`
    width: 50%;
    float: right;
    margin: 1%;
`;

export const Date_picker = styled.div`
    margin-top: 5% !important;
    display: grid;
`;

export const Inactive_Table = styled.div`
    box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px !important;
    width: 900px;
    padding: 20px;
    border-radius: 10px!important;
    margin-top:-35px;
    margin-left: 5%;
    margin-bottom: 5%;
`;

export const Submit_button = styled.div`
margin-top: 18%;

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

export const Stepper = styled.div`
    width: 20%;
`;

export const Radio_group = styled.div`
    margin-left: 45% !important;
`;

const CompanyGraphContainer = styled.div`
  max-height: calc(100vh - 100px);
  overflow-y: auto;
`;



export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left:60px;
`;

export const ChartContainer = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dropdown = styled.div`
  margin-left: 700px;
  margin-top: -50px;
`;




