import styled from "styled-components";


// export const Wrapper = styled.div`
//   width: 1400px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin-left:60px;
// `;

export const ChartContainer = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 20%;
  }

  @media (max-width: 1100px) {
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

  @media (max-width: 1100px) {
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

  @media (max-width: 1100px) {
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

  