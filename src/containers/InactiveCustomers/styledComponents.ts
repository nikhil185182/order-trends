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
  @media(max-width:700px){
    display: flex;
    flex-direction:column;
    margin-top:100px;
  }
  @media(max-width:1100px){
    flex-direction:column;
    margin-top:800px;
  }
  @media(max-width:2300px){
    display: flex;
    flex-direction:column;
    margin-top:100px;
  }
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

  @media(max-width: 1100px) {
    margin-right: 0;
  }

  @media(max-width: 700px) {
    width: 90%;
    margin-right: 0;
    margin-top: 200px;
  }
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

export const Datepicker = styled.div`
    margin-top: 5% !important;
    display: grid;
`;

export const Inactive_Table = styled.div`
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

export const Stepper = styled.div`
    width: 20%;
`;