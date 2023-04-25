import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;
    
`;

export const Totalcomponent = styled.div`
    display: flex;
    margin-top: 6%!important;
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


