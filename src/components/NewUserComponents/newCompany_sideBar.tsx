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
import { toggleDrawer } from "../../shared/utils/redux/reducers/newUserReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";
import {
  NewUserSidebar_dateBox,
  NewuserSidebar_heading,
} from "../../shared/styledComponents/newUserComponentsStyled";

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
      <Drawer
        anchor="right"
        open={IsDrawerOpen}
        onClose={() => {
          dispatch(toggleDrawer(false));
        }}
        PaperProps={{
          elevation: 10,
          sx: {
            width: 250,
            flexShrink: 100,
            "& .MuiDrawer-paper": {
              width: 100,
            },
            padding: 1,
            marginTop: 8.2,

            height: "87%",
            color: "black",
            backgroundColor: "white",
            borderRadius: 3,
          },
        }}
      >
        <NewuserSidebar_heading>
          <Typography
            style={{
              fontFamily: "Segoe UI",
              color: "white",
              paddingLeft: "3.5%",
              marginTop: "5%",
              fontSize: "148%",
              fontWeight: "bold",
            }}
          >
            {" "}
            Companies Enrolled
          </Typography>
        </NewuserSidebar_heading>

        <NewUserSidebar_dateBox>
          <Typography
            style={{
              fontFamily: "Segoe UI",
              paddingLeft: "5%",
              fontSize: "120%",
              fontWeight: "bold",
              marginLeft: "6%",
              margin: "5%",
            }}
          >
            Date: {tempbarclickedDate}
          </Typography>
          <Divider />
          <Typography
            style={{
              fontFamily: "Segoe UI",
              paddingLeft: "5%",
              fontSize: "120%",
              fontWeight: "bold",
              marginLeft: "6%",
              margin: "5%",
            }}
          >
            Enrollments: {listofcompanies.length}
          </Typography>
        </NewUserSidebar_dateBox>

        <List>
          {listofcompanies?.map((text, index) => (
            <ListItem style={{ padding: "2%" }}>
              <ListItemText
                primaryTypographyProps={{
                  paddingLeft: 1,
                  fontSize: "16px",
                  fontFamily: "Segoe UI",
                  padding: "1",
                }}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
