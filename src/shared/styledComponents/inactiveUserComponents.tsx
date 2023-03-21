import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;

export const Total_component = styled.div`
  display: flex;
  margin-top: 5%;
`;

export const InactiveUsertable_container = styled.div`
  height: 270px!important;
`;

export const Heading = styled.div`
  height: 5px!important;
`;

export const Datepicker_component = styled.div`
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

export const rows = styled.div`
  width: 20%;
  overflow: hidden;
`;

export const inner = styled.div`
  width: 70%;
`;

export const search_bar = styled.div`
  width: 50%;
  float: right;
  margin: 10px;
`;

export const Date_picker = styled.div`
  margin-top: 5px !important;
  display: grid;
`;

export const Inactive_Table = styled.div`
  box-shadow: rgba(37, 37, 37, 0.2) 0px 2px 8px 0px !important;
  width: 900px;
  padding: 20px;
  border-radius: 10px!important;
  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 20px;
`;

export const submit_btn = styled.button`
  margin-top: 35px !important;
  margin-left: -10px !important;
  margin-bottom: 0px !important;
  background-color: #55B74E !important;
`;

export const stepper = styled.div`
  width: 170px;
`;

export const radio_group = styled.div`
  margin-left: 450px !important;
`;

/* Media queries */

export const MobileContainer = styled(container)`
  flex-direction: column-reverse;

  ${Datepicker_component} {
    order: 1;
    margin-top: 0;
    margin-bottom: 20px;
  }

  ${Inactive_Table} {
    order: 2;
    margin:auto;
  }
`;

export const MediumScreenStyles = `
  /* Adjust styles for medium screens */
  ${search_bar} {
    width: 70%;
    margin: 10px;
  }

  ${Inactive_Table} {
    width: 70%;
    margin-left: 0;
  }

  ${radio_group} {
    margin-left: 0 !important;
  }
`;

export const LargeScreenStyles = `
  /* Adjust styles for large screens */
  ${search_bar} {
    width: 50%;
    margin: 10px;
  }

  ${Inactive_Table} {
    width: 900px;
    margin-left: 50px;
  }

  ${radio_group} {
    margin-left: 450px !important;
  }
`;

export const MediumScreen = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    ${MediumScreenStyles}
  }
`;

