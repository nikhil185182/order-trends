import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 5%;
    @media (max-width:820px){
        width:100%!important;
        flex-direction:column;
        justify-content: space-around;
        align-items:center;
        margin-top:5%
        padding:10%
    }
    @media (max-width:420px){
        width:100%!important;
        flex-direction:column;
        justify-content:;
        align-items:center;
        margin-top:5%
        padding:1%
    }
`

export const SubContainerOne = styled.div`
    width:25%
    margin: 0.5%;
    padding: 1%;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width:820px){
       width:100%
       display: flex;
       align-items:center;
       flex-direction: row;
    }
    @media (max-width:420px){
        flex-direction:column;
        align-items:center;
        width:100%;
        height:max-content;
        justify-content: space-between;
        padding:10%;
        margin-top:5%
        margin-left:400px!important
    }
`

export const SubcontainerTwo = styled.div`
    width: 100%;
    height: 85%;
    margin: 1%;
    margin-right: 0.5%;
    margin-left: 0.5%;
    padding: 1.5%;
    box-shadow: rgba(26, 26, 26, 0.2) 0px 4px 10px 0px;
    border-radius: 10px;
    @media (max-width:440px){
        padding:2.5%;
        margin:0 10%;
    }
  `

export const SearchBarComponent  = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px!important;
    width: 93%;
    padding: 20px;
    margin-bottom: 10px;
    box-shadow: rgba(62, 60, 60, 0.2) 0px 4px 10px 0px;
    border-radius: 10px;
    scrollbar-width: none!important;
    overflow-y: scroll;
    overflow-x: hidden;
    @media (max-width:820px){
        width:45%;
        margin:2.5%;
    }
    @media (max-width:420px){
        width:90%;
        height: 300px!important;
    }
  `

  export const DatepickerComponent = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 93%;
    align-items: center;
    padding: 25px;
    margin-top: 10px;
    box-shadow: rgba(27, 26, 26, 0.2) 0px 2px 8px 0px;
    border-radius: 10px;
    overflow-y: scroll;
    scrollbar-width: none!important;
    @media (max-width:820px){
        width:45%;
        margin:2.5%;
     }
     @media (max-width:420px){
        width:90%;
        height: 300px!important;
        overflow-y: scroll;
        scrollbar-width: none!important;
    }
  `

  export const ButtonComponent = styled.button`
    color :"white",
    backgroundColor:"#54B948",
    width:"90%",
    borderRadius:"20px",
    fontSize:"16.5px",
    height:"80%"
    border: 2px solid palevioletred;
  `
  export const RadioButtonComponent= styled.div`
    width: max-content;
    margin-top: 1%;
    margin-left: 25%;
    @media (max-width:840px){
     margin-left:10%;
    }
    @media (max-width:340px){
      margin-left:1%;
     }
  `
  
  export const ChartComponent = styled.div`
    height: 90%;
    padding:1%
  `
  