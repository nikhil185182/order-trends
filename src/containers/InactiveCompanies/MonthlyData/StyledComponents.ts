import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const StyledDropdown = styled(Select)`
  width: 100px;
  height:40px;
  border-radius: 5px;
  border: #55B74E;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledMenuItem = styled(MenuItem)`
  font-size: 14px;
  margin-top: 8px;
`;

export const ChartContainer = styled.div`
  height: 450px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 20%;
  }

  @media (max-width: 1400px) {
    width: 60%;
  }
`;

export const Dropdown = styled.div`
  margin-left: 700px;
  margin-top: -50px;

  @media (max-width: 700px) {
    margin-left: 70px!important;
    margin-top: 10px;
  }

  @media (max-width: 1400px) {
    margin-left: 70px;
    margin-top:10px;
  }
`;

export const Wrapper = styled.div`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left:60px;

  @media (max-width: 1400px) {
    width: 90%;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

  