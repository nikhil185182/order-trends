import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledDateSelectionRange = styled.div`
  /* border: 3px solid rgb(183, 177, 177); */
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  border-radius: 15px;
  height: 105%;
  margin-top: 5%;
  width: 90%;
  margin-left: 7%;

  @media (max-width: 1000px) {
    border: 3px solid rgb(183, 177, 177);
    border-radius: 15px;
    height: 83%;
    margin-top: 3% !important;
    width: 80%;
    margin-left: 7%;
  }
  @media (max-width: 590px) {
    margin-top: 5% !important;
    align-items: center !important;
    margin-left: 0%;
    height: 90%;
    margin-bottom: 5%;
  }
`;

export const StyledDateRange = styled(Typography)`
  && {
    padding: 6%;
    padding-left: 21%;
    padding-top: 8%;
    font-weight: bold;
    font-family: Roboto;

    @media (max-width: 1000px) {
      padding: 6%;
      padding-left: 31%;
      padding-top: 12%;
      font-weight: bold;
    }

    @media (max-width: 590px) {
      margin-top: 0%;
      padding-top: 3%;
      padding-left: 26%;
      padding-bottom: 4%;
    }
  }
`;
export const StyledFromContainer = styled.div`
  padding-right: 50px;
  display: flex;
  margin-top: 5%;
  margin-right: 0%;
  justify-content: space-between;
  padding: 5px;

  @media (max-width: 1000px) {
    padding-right: 5% !important;
    display: flex;
    margin-top: 5%;
    margin-right: 0%;
    margin-left: 15%;
    justify-content: space-between;
    padding: 5px;
  }

  @media (max-width: 590px) {
    margin-top: 0% !important;
    padding-top: 0% !important;
    margin-right: 10%;
    margin-left: 15%;
  }
`;

export const StyledDatePicker = styled.div`
  align-items: center;
  height: 20px;
  padding: 10px;
`;

export const StyledToContainer = styled.div`
  padding-right: 50px;
  display: flex;
  margin-top: 10%;
  margin-right: 0%;
  justify-content: space-between;
  padding: 5px;

  @media (max-width: 1000px) {
    padding-right: 5% !important;
    display: flex;
    margin-top: 10%;
    margin-right: 0%;
    margin-left: 15%;
    justify-content: space-between;
    padding: 5px;
  }
  @media (max-width: 590px) {
    margin-left: 15%;
    margin-right: 10%;
    margin-top: 5%;
  }
`;

export const StyledSubmitBtn = styled.div`
  padding-left: 30%;
  margin-top: 23%;

  @media (max-width: 1000px) {
    padding-left: 36%;
    margin-top: 15%;
  }
  @media (max-width: 590px) {
    margin-top: 10%;
    padding-left: 35%;
    margin-bottom: 4%;
  }
`;
