import {
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggleDrawer } from "../CompaniesEnrolled/reducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";
import { AppDispatch } from "../../shared/utils/redux/store";

import { CompaniesEnrolled_head } from "../../shared/global_constants";
import { CustomDrawer,StyledDate, StyledDisplay, StyledEnrollments, StyledHeading, StyledHeadingBackGround } from "./StyledComponents";



export default function SideBar() {
  const dispatch: AppDispatch = useAppDispatch();
  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);
  const ListOfCompanies = useAppSelector(
    (state) => state.NewUser.tempcompanieslist
  );
  const tempbarclickedDate = useAppSelector(
    (state) => state.NewUser.barclickedDate
  );
  const OnCloseDrawer = () => {
    dispatch(toggleDrawer(false));
  };
 
  return (
    <>
      <CustomDrawer anchor="right" open={IsDrawerOpen} onClose={OnCloseDrawer}>
        <IconButton onClick={OnCloseDrawer}>
          {IsDrawerOpen ? <ChevronRightIcon /> : <ChevronRightIcon />}
        </IconButton>
        <StyledHeadingBackGround>
          <StyledHeading>
            {CompaniesEnrolled_head}
          </StyledHeading>
        </StyledHeadingBackGround>

        <StyledDisplay>
          <StyledDate>Date: {tempbarclickedDate}</StyledDate>
          <Divider />
          <StyledEnrollments>
            Enrollments: {ListOfCompanies.length}
          </StyledEnrollments>
        </StyledDisplay>
        <List>
          {ListOfCompanies?.map((text, index) => (
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
