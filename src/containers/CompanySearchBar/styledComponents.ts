import styled from "styled-components";


export const SearchBoxContainer = styled.div`
    background-color : blue,
`;



// Input component
export const Input = styled.input`
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

// ResultsBox component
export const ResultsBox = styled.div`
  background-color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 100%;
  position: absolute;
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
`;

// Result component
export const Result = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
`;

