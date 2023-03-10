import { Drawer, IconButton, Divider, List, ListItem, ListItemText, useTheme } from "@mui/material";
import { toggleDrawer } from "../../shared/utils/redux/reducers/newUserReducer";
import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Colors } from "chart.js";
import { borderRadius } from "@mui/system";


export default function NewUsersideBar(){
    const drawerWidth = 270;
    const theme = useTheme();
    const dispatch: AppDispatch = useAppDispatch();

  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);
  const listofcompanies = useAppSelector(
    (state) => state.NewUser.tempcompanieslist
  );
  const tempbarclickedDate=useAppSelector((state)=>state.NewUser.barclickedDate);
    return(<div className="drawer_in" >
      <Drawer 
      anchor="right"
      open={IsDrawerOpen}
      onClose={() => {
        dispatch(toggleDrawer(false))
       
      }}
      
      
      PaperProps={{
        elevation: 10,
        sx: {
          width: 250,
          flexShrink: 100,
          '& .MuiDrawer-paper': {
            width: 100,
          },
          padding: 1,
          marginTop: 8.2,
          
          height: "87%",
          color: "black",
          backgroundColor: "white",
           borderRadius: 3,
        },
      }}  >
        <div className="sidebar_heading" style={{backgroundColor:"#55B74E",borderRadius:6,width:"100%",height:"8%",paddingBottom:"3%",paddingTop:"0%"}}>
        <h2 style={{fontFamily:'Segoe UI',color:'white',paddingLeft:'3.5%',marginTop:"5%"}}> Enrolled Companies</h2></div>
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',padding:'2%',marginTop:'4%',borderRadius:6}}>
        <h3 style={{fontFamily:'Segoe UI',paddingLeft:'3%'}}>Date: {tempbarclickedDate}</h3>
      <Divider/>
        <h3 style={{fontFamily:'Segoe UI',paddingLeft:'3.5%'}}>Enrollments: {listofcompanies.length}</h3>
        </div>
        <List>
          
          {listofcompanies?.map((text, index) => (
            <ListItem style={{padding:"2%"}}>
           
              {/* <AddBusinessOutlinedIcon style={{ fill: "#0072ea" }} /> */}
              <ListItemText
                primaryTypographyProps={{
                  paddingLeft: 1,
                  fontSize: "16px",
                  fontFamily: "Segoe UI",
                  padding:'1'
                  // lineHeight:1
                  
                }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </Drawer></div>)
}