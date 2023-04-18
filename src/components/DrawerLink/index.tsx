import {NavLink} from "react-router-dom";
import { GREEN } from "../../shared/global_constants";
import styled from "styled-components";


export const DrawerLink = styled(NavLink)`
  text-decoration: none;
  padding : 5px;
  width : 100%;
  color : ${GREEN};
  border-radius : 5px;
  &.active {
    border: 1px solid ${GREEN};
  }
`;