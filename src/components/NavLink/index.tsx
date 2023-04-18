import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding : 5px;
  color : white;
  border-radius : 5px;
  &.active {
    border: 1px solid white;
  }
`;

