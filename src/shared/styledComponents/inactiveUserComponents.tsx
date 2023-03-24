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
    height: 270px!important;
    width: 90%;
`;

export const Heading = styled.div`
    height: 5px!important;
`;

export const Datepicker_component = styled.div`
    align-items: center;
    display: inline-block;
    width: 20%;
    height: 100px;
    margin-top: 15px;
    margin-left: 20px;
    padding: 50px;
    margin-bottom: 20px;
    box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
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
    margin-left: 5%;
    margin-top: 1.5%;
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





