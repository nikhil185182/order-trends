import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getInactiveUsersData, GQL_list, InactiveMonths, Li2 } from "./models";
import { INACTIVEMONTHS_QUERY, INACTIVEUSERS_QUERY } from "./queries";
import { useQuery } from "@apollo/client";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
type initialstatetypes =
    {
        GQL_list: InactiveMonths[];
        Date: String;
        inactiveUsers: getInactiveUsersData[];
    };
const today: Date = new Date();
today.setDate(today.getDate() - 60);
const dateString: string = today.toISOString().slice(0, 10);

const InitialState: initialstatetypes =
{
    Date: dateString,
    inactiveUsers: [],
    GQL_list: [],
};

export const fetchInactiveMonths = createAsyncThunk("InactiveUsers/fetchInactiveData", async (thunkAPI) => {
    const { data } = useQuery<GQL_list>(INACTIVEMONTHS_QUERY, { variables: { input: 60 } });
    console.log(data);
    const tempResult: InactiveMonths[] = data?.inactivemonths ?? [];
    console.log(tempResult);
    const result: InactiveMonths[] = [];
    tempResult?.map((c: InactiveMonths) => result.push(c));
    console.log(result);
    return result;
});

export const fetchInactiveDate = createAsyncThunk("InactiveUsers/addingInactiveUsersdata", async (thunkAPI) => {
    const inputDays = useAppSelector(state => state.InactiveUsers.Date);
  const { loading, error, data } = useQuery<Li2>(INACTIVEUSERS_QUERY, {
    variables: { input: inputDays }
  })
  if (data) {
    const li2: getInactiveUsersData[] | undefined = data?.inactiveusers;

    var original: getInactiveUsersData[] = [];

    li2?.map((e: getInactiveUsersData) => {
      original.push(e);
    })
    console.log(original);
    return original;

  } else if (loading) {
    console.log("Data is Loading")
    return []
  }
  else {
    console.log(`Error ${error?.message}`)
    return []
  }
});




const InactiveUserSlice = createSlice({
    name: "InactiveUsers",
    initialState: InitialState,
    reducers: {
        settingDate: (state, { payload }) => { state.Date = payload; },
        addingInactiveUsersdata(state, action: PayloadAction<getInactiveUsersData[]>) {
            state.inactiveUsers = action.payload;
        },
        fetchInactiveData(state, action: PayloadAction<InactiveMonths[]>) {
            state.GQL_list = action.payload;
        },

    },
    extraReducers : (builder)=>{
        builder.addCase(fetchInactiveMonths.pending,(state)=>{
        }).addCase(fetchInactiveMonths.fulfilled,(state,action : PayloadAction<InactiveMonths[]>)=>{
            state.GQL_list = action.payload;
        }).addCase(fetchInactiveDate.fulfilled,(state,action : PayloadAction<getInactiveUsersData[]>)=>{
            state.inactiveUsers = action.payload;
        }).addCase(fetchInactiveMonths.rejected,(state)=>{
        })
    }
});



export default InactiveUserSlice;

export const { settingDate, addingInactiveUsersdata, fetchInactiveData } = InactiveUserSlice.actions;

