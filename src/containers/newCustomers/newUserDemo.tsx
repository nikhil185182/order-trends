
import "../../shared/css/newUserDemo.css";

import { useAppDispatch, useAppSelector } from "../../shared/utils/redux/selectors/hooks";

import NewUserDate_selectionBox from "../../components/NewUserComponents/newUser_dateSelectionBox";
import NewUsersideBar from "../../components/NewUserComponents/newCompany_sideBar";
import NewUserTable from "../../components/NewUserComponents/newUsertable";
import NewUserChart from "../../components/NewUserComponents/NewUserChart";
import Dialogbox from "../../components/NewUserComponents/Dialog";
import { Fetchnewusersdata } from "../../shared/utils/redux/reducers/newUserReducer";
import { AppDispatch } from "../../shared/utils/redux/store";



export default function NewUserDemo() {
  const dispatch:AppDispatch=useAppDispatch()
  dispatch(Fetchnewusersdata());
  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);

  return (
    <>
      <div className="NewUserCompletePage">
        <div className="NewUsersdateSelection_block">
          <NewUserDate_selectionBox />
          <NewUserTable />
        </div>
        {IsDrawerOpen ? (
          <div
            className="newUser_chartcomponent_withsidebar"
            
          >
            <NewUserChart />
          </div>
        ) : (
          <div
            className="newUser_chartcomponent_withoutsidebar"
           
          >
            <NewUserChart />
          </div>
        )}
      </div>
      {/* <Dialogbox/> */}
      <NewUsersideBar />
    </>
  );
}

