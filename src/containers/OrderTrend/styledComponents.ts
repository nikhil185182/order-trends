import styled from "styled-components";

export const StyledOrderTrendBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top:70px;
`;

// export const StyledButton = styled(MButton)(props => ({
// color: ${props.color ? 'red' : 'green'}
// )}
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;