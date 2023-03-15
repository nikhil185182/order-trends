import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const TotalComponent = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const InactiveUserTableContainer = styled.div`
  height: 270px!important;
`;

export const Heading = styled.div`
  height: 5px!important;
`;

export const DatepickerComponent = styled.div`
  align-items: center;
  display: inline-block;
  width: 170px;
  height: 100px;
  margin-top: 15px;
  margin-left: 20px;
  padding: 50px;
  margin-bottom: 20px;
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
`;

export const Rows = styled.div`
  width: 20%;
  overflow: hidden;
`;

export const InnerRows = styled.div`
  width: 70%;
`;

export const SearchBar = styled.div`
  width: 50%;
  float: right;
  margin: 10px;
`;

export const DatePicker = styled.div`
  margin-top: 5px !important;
  display: grid;
`;

export const InactiveTable = styled.div`
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px !important;
  width: 900px;
  padding: 20px;
  border-radius: 10px!important;
  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  margin-top: 35px !important;
  margin-left: -10px !important;
  margin-bottom: 0px !important;
  background-color: #55B74E !important;
`;

export const Stepper = styled.div`
  width: 170px;
`;

export const RadioGroup = styled.div`
  margin-left: 450px !important;
`;

/* Media queries */

export const MobileContainer = styled(Container)`
  flex-direction: column-reverse;

  ${DatepickerComponent} {
    order: 1;
    margin-top: 0;
    margin-bottom: 20px;
  }

  ${InactiveTable} {
    order: 2;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MediumScreenStyles = `
  /* Adjust styles for medium screens */
  ${SearchBar} {
    width: 70%;
    margin: 10px;
  }

  ${InactiveTable} {
    width: 70%;
    margin-left: 0;
  }

  ${RadioGroup} {
    margin-left: 0 !important;
  }
`;

export const LargeScreenStyles = `
  /* Adjust styles for large screens */
  ${SearchBar} {
    width: 50%;
    margin: 10px;
  }

  ${InactiveTable} {
    width: 900px;
    margin-left: 50px;
  }

  ${RadioGroup} {
    margin-left: 450px !important;
  }
`;

export const MediumScreen = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    ${MediumScreenStyles}
  }
`;

