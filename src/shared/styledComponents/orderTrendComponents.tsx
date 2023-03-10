import styled from "styled-components";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const ORDER_TREND_BOX = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:80px;
`;

export const STATISTICS_TAB = styled.div`
    align-items: center;
    width: 100%;
    display: flex;
    flex-direction: column;
`;


export const CHART_CUSTOMISE = styled.div`
    margin-top: 25px;
    width: 20.1%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const DAYS_CUSTOMISE = styled.div`
    margin-top: 20px;
    width: 47.5%;
    display: flex;
    justify-content: space-between;
`;

export const COMPARE_TAB = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:flex-start
`;


export const COMPARE_GRAPH = styled.div`
    width: 75%;
`;

export const COMPARE_DATEPICKER = styled.div`
    border: 2px;
    border-color: rgb(177, 177, 177);
    border-radius: 10px;
    border-style:solid;
    padding: 20px;
    width: 200px;
    align-items: center;


    
`;

export const DATELIST_BOX = styled.div`
    max-height: 380px;
    overflow-y: auto;
    margin: 10px 5px; 
    padding: 5px;
    text-align: center;
`;