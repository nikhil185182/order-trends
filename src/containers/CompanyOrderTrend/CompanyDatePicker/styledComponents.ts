import styled from "styled-components";


export const SearchBoxContainer = styled.div`
    background-color : blue,
`;


// Input component
export const Input = styled.input`
  border-radius: 4px;
  padding: 10px;
  width: 100%;
`;

// ResultsBox component
export const ResultsBox = styled.div`
  background-color: white;
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

export const CompanySubmit = styled.div`
margin-left:50px;
margin-top:10px;
`

