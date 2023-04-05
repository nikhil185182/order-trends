// import "../../shared/css/newUserDemo.css";

import {
  useAppDispatch,
  useAppSelector,
} from "../../shared/utils/redux/selectors/hooks";

import NewUserDate_selectionBox from "../../components/NewUserComponents/DateRangeSelectionBlock";
import NewUsersideBar from "../../components/NewUserComponents/SideBar";
import NewUserTable from "../../components/NewUserComponents/InfoDisplayBlock";
import NewUserChart from "../../components/NewUserComponents/ChartComponent";
import {
  NewUserCompletePage,
  NewUsersdateSelection_block,
  NewUser_chartcomponent_withsidebar,
  NewUser_chartcomponent_withoutsidebar,
  NewUser_chartcomponent_withsidebardemo,
} from "./StyledComponents";
import { Fetchnewusersdata } from "./Reducer";
import { AppDispatch } from "../../shared/utils/redux/store";

export default function NewUserDemo() {
  const dispatch: AppDispatch = useAppDispatch();
  dispatch(Fetchnewusersdata());
  const IsDrawerOpen = useAppSelector((state) => state.NewUser.isDrawerOpen);

  return (
    <>
      <NewUserCompletePage>
        <NewUsersdateSelection_block>
          <NewUserDate_selectionBox />
<NewUserTable />
        </NewUsersdateSelection_block>
        <NewUser_chartcomponent_withsidebardemo IsDrawerOpen={IsDrawerOpen}>
          <NewUserChart />
        </NewUser_chartcomponent_withsidebardemo>
      </NewUserCompletePage>
      <NewUsersideBar />
    </>
  );
}
