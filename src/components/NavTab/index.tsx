import {NavLink} from "react-router-dom";

export type NavtabType = {
    to : string,
    label : string,
    status : boolean
}

export const NavTab = (props : {details :NavtabType})=>{
    return (
        <NavLink to={props.details.to} style={({ isActive, isPending }) => {
            return {
              textDecoration : 'none',
              fontFamily: 'Roboto',
              padding : '5px',
              border : isActive && props.details.status ? "1px solid white" : "",
              borderRadius : '5px',
              color:"white",
            };
          }}  
        >{props.details.label}</NavLink>
    );
}