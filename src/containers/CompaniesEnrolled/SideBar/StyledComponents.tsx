import { Drawer, Typography } from "@mui/material";
import styled from "styled-components";

export const CustomDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    width: "16%",
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "3px 3px 10px #ccc",
    borderRadius: 10,
    padding: "5px",
    marginTop: "4%",
    height: "88%",
    marginBottom: "30% !important",
  },
  "@media (max-width: 1000px)": {
    "& .MuiDrawer-paper": {
      width: "31%",
      marginTop: "58%",
      padding: "5px",
      height: "51%",
    },
  },
  "@media (max-width: 590px)": {
    "& .MuiDrawer-paper": {
      width: "70%",
      marginTop: "89%",
      padding: "5px",
      height: "47%",
    },
  },
});

export const StyledHeadingBackGround = styled.div`
  background-color: #55b74e;
  display: flex;
  border-radius: 5% !important;
  width: 100%;
  height: 8%;
  align-items: center;

  padding-bottom: 3%;
  padding-top: 0%;
  @media (max-width: 1000px) {
    height: 11%;
  }
`;

export const StyledHeading = styled(Typography)`
  && {
    font-family: Roboto;
    color: white;
    font-size: 150%;
    padding-left: 5%;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: center;
    padding-top: 4%;
  }
`;

export const StyledDisplay = styled.div`
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 2%;
  margin-top: 4%;
  border-radius: 5% !important;
`;

export const StyledDate = styled(Typography)`
  && {
    font-family: Roboto;
    padding-left: 5%;
    font-size: 120%;
    font-weight: bold;
    margin-left: 6%;
    margin: 5%;
  }
`;

export const StyledEnrollments = styled(Typography)`
  && {
    font-family: Roboto;
    padding-left: 5%;
    font-size: 120%;
    font-weight: bold;
    margin-left: 6%;
    margin: 5%;
  }
`;
