import styled, { css } from "styled-components";

export const StyledCompaniesEnrolled = styled.div`
  margin-top: 4.8%;
  display: flex;
  width: 95% !important;
  height: 70% !important;

  @media (max-width: 1000px) {
    display: grid;
    margin-top: 7%;
    grid-template-rows: 46%;
    grid-gap: 8%;
  }
  @media (max-width: 590px) {
    display: flex !important;
    flex-direction: column;
    margin-top: 13%;
  }
`;

export const StyledDateSelector = styled.div`
  width: "30%";
  height: "40%";
  display: grid;
  grid-template-rows: 46%;
  grid-gap: 6%;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    margin: 0 -2px;
  }
  @media (max-width: 590px) {
    display: flex;
    flex-direction: column;
    margin-top: 0%;
    height: 100%;
    justify-content: space-around;
  }
`;

export const NewUser_chartcomponent_withsidebar = styled.div`
  width: 61%;
  height: 100% !important;
  margin-left: 2%;
  margin-top: 1% !important;
  padding-top: 5% !important;
  padding: 10px;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;

  @media (max-width: 1000px) {
    width: 66%;
    height: 100% !important  ;
    margin-left: 2%;
    margin-top: 1% !important;
    padding-top: 5% !important;
    padding: 10px;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  }
`;

export const NewUser_chartcomponent_withoutsidebar = styled.div`
  margin-top: 0.7% !important;
  margin-left: 2%;
  height: 80% !important ;
  width: 71%;
  margin-top: 0;
  padding: 10px;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 1000px) {
    margin-top: 0.7% !important;
    margin-left: 2%;
    height: 100% !important ;
    width: 92%;
    margin-top: 0;
    padding: 10px;
    justify-content: space-between;
    border-radius: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

interface INewUserChartProps {
  IsDrawerOpen: boolean;
}

export const StyledEnrolledCompaniesChart = styled.div<INewUserChartProps>`
  margin-top: 0.7% !important;
  margin-left: 2%;
  height: 80% !important ;
  width: 71%;
  margin-top: 0;
  padding: 10px;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 1000px) {
    margin-top: 0.7% !important;
    margin-left: 2%;
    height: 100% !important ;
    width: 92%;
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
      height: 100% !important;
      margin-left: 2%;
      margin-top: 1% !important;
      padding-top: 5% !important;
      padding: 10px;
      justify-content: space-between;
      border-radius: 15px;
      box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;

      @media (max-width: 1000px) {
        width: 66%;
        height: 100% !important  ;
        margin-left: 2%;
        margin-top: 1% !important;
        padding-top: 5% !important;
        padding: 10px;
        justify-content: space-between;
        border-radius: 15px;
        box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
      }
    `};
`;
