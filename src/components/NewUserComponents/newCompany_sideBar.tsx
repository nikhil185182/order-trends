import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  useTheme,
  Typography,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { toggleDrawer } from "../../shared/utils/redux/reducers/newUserReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import {
  CustomDrawer,
  NewUserSidebar_dateBox,
  NewuserSidebar_heading,
  SideBar_CompaniesEnrolledTypo,
  SideBar_DateTypo,
  Sidebar_EnrollmentsTypo,
} from "../../shared/styledComponents/newUserComponentsStyled"

export default function NewUsersideBar() {
  const dispatch: AppDispatch = useAppDispatch();
  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);
  const listofcompanies = useAppSelector(
    (state) => state.NewUser.tempcompanieslist
  );
  const tempbarclickedDate = useAppSelector(
    (state) => state.NewUser.barclickedDate
  );
  return (
    <>
      <CustomDrawer
      anchor="right"
      open={IsDrawerOpen}
      onClose={() => {
        dispatch(toggleDrawer(false));
      }}
      >
        <IconButton onClick={()=>dispatch(toggleDrawer(false))}>
            {IsDrawerOpen? < ChevronRightIcon /> : < ChevronRightIcon/>}
          </IconButton>
       <NewuserSidebar_heading>
          <SideBar_CompaniesEnrolledTypo>
            {" "}
            Companies Enrolled
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
