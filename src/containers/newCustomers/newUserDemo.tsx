
// import "../../shared/css/newUserDemo.css";

import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/selectors/hooks";

import NewUserDate_selectionBox from "../../components/NewUserComponents/newUser_dateSelectionBox";
import NewUsersideBar from "../../components/NewUserComponents/newCompany_sideBar";
import NewUserTable from "../../components/NewUserComponents/newUsertable";
import NewUserChart from "../../components/NewUserComponents/NewUserChart";
import { NewUserCompletePage, NewUsersdateSelection_block, NewUser_chartcomponent_withsidebar, NewUser_chartcomponent_withoutsidebar } from "../../shared/styledComponents/newUserComponentsStyled";
import { Fetchnewusersdata } from "../../shared/utils/redux/reducers/newUserReducer";
import { AppDispatch } from "../../shared/utils/redux/store";



export default function NewUserDemo() {
  const dispatch: AppDispatch = useAppDispatch()
  dispatch(Fetchnewusersdata());
  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);

  return (
    <>
      <NewUserCompletePage>
          <NewUsersdateSelection_block>
              <NewUserDate_selectionBox />
              <NewUserTable />
        </NewUsersdateSelection_block>
        {IsDrawerOpen ? (
  <NewUser_chartcomponent_withsidebar>
            <NewUserChart />
          </NewUser_chartcomponent_withsidebar>
 ) : (
 <NewUser_chartcomponent_withoutsidebar>
            <NewUserChart /></NewUser_chartcomponent_withoutsidebar>
)}
      </NewUserCompletePage>
{/* <Dialogbox/> */}
      <NewUsersideBar />
    </>
  );
}

