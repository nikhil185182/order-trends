import {NavLink} from "react-router-dom";
import { GREEN } from "../../shared/global_constants";

export type NavtabType = {
    to : string,
    label : string,
    status : boolean
}

export const DrawerTab = (props : {details :NavtabType})=>{
    return (
        <NavLink to={props.details.to} style={({ isActive, isPending }) => {
            return {
              textDecoration : 'none',
              width:'100%',
              fontFamily: 'Roboto',
              padding : '5px',
              border : isActive && props.details.status ? "1px solid "+GREEN : "",
              borderRadius : '5px',
              color:GREEN,
            };
          }}  
        >{props.details.label}</NavLink>
    );
}