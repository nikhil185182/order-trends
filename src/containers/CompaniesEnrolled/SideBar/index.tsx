import {IconButton,Divider,List,ListItem,ListItemText} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { toggleDrawer } from "../reducer";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/utils/redux/hooks";
import { AppDispatch } from "../../../shared/utils/redux/store";

import { CompaniesEnrolled_head } from "../../../shared/global_constants";
import {
  CustomDrawer,
  StyledDate,
  StyledDisplay,
  StyledEnrollments,
  StyledHeading,
  StyledHeadingBackGround,
} from "./StyledComponents";
import {
  getChartClickedDate,
  getIsDrawerOpen,
  getListOfCompanies,
} from "./selector";

export default function SideBar() {
  const dispatch: AppDispatch = useAppDispatch();
  const IsDrawerOpen = useAppSelector(getIsDrawerOpen);
  const ListOfCompanies = useAppSelector(getListOfCompanies);
  const tempChartClickedDate = useAppSelector(getChartClickedDate);

  const OnCloseDrawer = () => dispatch(toggleDrawer(false));

  return (
    <>
      <CustomDrawer anchor="right" open={IsDrawerOpen} onClose={OnCloseDrawer}>
        <IconButton onClick={OnCloseDrawer}>
          {IsDrawerOpen ? <ChevronRightIcon /> : <ChevronRightIcon />}
        </IconButton>
        <StyledHeadingBackGround>
          <StyledHeading>{CompaniesEnrolled_head}</StyledHeading>
        </StyledHeadingBackGround>
        <StyledDisplay>
          <StyledDate>Date: {tempChartClickedDate}</StyledDate>
          <Divider />
          <StyledEnrollments>
            Enrollments: {ListOfCompanies.length}
          </StyledEnrollments>
        </StyledDisplay>
        <List>
          {ListOfCompanies?.map((text: any,index) => (
            <ListItem style={{ padding: "2%" }} key={index}>
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
