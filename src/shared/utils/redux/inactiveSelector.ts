import { createAsyncThunk } from "@reduxjs/toolkit";
import { reqbody, companyLevel } from "../../dto/companyLevelOrderDTO";
import { inacparam, GQL_list, InactiveMonths } from "../../dto/InactiveUsersDTO";
import { GetSpecificCompanyData, InactiveUtil } from "../graphql/gqlHelper";
import { RootState } from "./store";

export const inactiveSelector = (state: RootState) => state.InactiveUsers.GQL_list;

