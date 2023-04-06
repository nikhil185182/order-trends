import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { toggleDrawer } from "../../containers/newCustomers/Reducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";


import { CompaniesEnrolled_head } from "../../shared/global_constants";
import { CustomDrawer, NewuserSidebar_heading, SideBar_CompaniesEnrolledTypo, NewUserSidebar_dateBox, SideBar_DateTypo, Sidebar_EnrollmentsTypo } from "../../containers/newCustomers/StyledComponents";

export default function NewUsersideBar() {
  const dispatch: AppDispatch = useAppDispatch();
  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);
  const listofcompanies = useAppSelector(
    (state) => state.NewUser.tempcompanieslist
  );
  const tempbarclickedDate = useAppSelector(
    (state) => state.NewUser.barclickedDate
  );
  const onclosedrawer=()=>{
    dispatch(toggleDrawer(false));
  }
  const closebutton=()=>{
    dispatch(toggleDrawer(false))
  }
  return (
    <>
      <CustomDrawer
      anchor="right"
      open={IsDrawerOpen}
      onClose={onclosedrawer}
      >
        <IconButton onClick={closebutton}>
            {IsDrawerOpen? < ChevronRightIcon /> : < ChevronRightIcon/>}
          </IconButton>
       <NewuserSidebar_heading>
          <SideBar_CompaniesEnrolledTypo>
            {" "}
            {CompaniesEnrolled_head}
         </SideBar_CompaniesEnrolledTypo>
        </NewuserSidebar_heading>

        <NewUserSidebar_dateBox>
         <SideBar_DateTypo>
            Date: {tempbarclickedDate}</SideBar_DateTypo>
 <Divider />
        <Sidebar_EnrollmentsTypo>
            Enrollments: {listofcompanies.length}</Sidebar_EnrollmentsTypo>
  </NewUserSidebar_dateBox>
 <List>
          {listofcompanies?.map((text, index) => (
            <ListItem style={{ padding: "2%" }}>
              <ListItemText
                primaryTypographyProps={{
                  paddingLeft: 1,
                  fontSize: "16px",
                  fontFamily: "Roboto",
                  padding: "1",
                }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
        
        </CustomDrawer>
    
    </>
  );
}
