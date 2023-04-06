import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
export  const  DateTypeCast=(inputDate:string)=>{
  let from = inputDate.split("/");

    return  new Date(
        Number(from[2]),
        Number(from[0]) - 1,
        Number(from[1])
    );
}

export const ConvertedfromandToDates = () => {
    const fromdate = useAppSelector((state) => state.EnrolledCompanies.fromDate);
    const todate = useAppSelector((state) => state.EnrolledCompanies.toDate);
    let from = fromdate.split("/");

    let from_final = new Date(
        Number(from[2]),
        Number(from[0]) - 1,
        Number(from[1])
    );
    let to = todate.split("/");
    const CompanyInfo = useAppSelector((state) => state.EnrolledCompanies.newUsersdata);
  let enrollment: number = 0;
  CompanyInfo.map((obj) => {
    enrollment = enrollment + obj.frequency;
  });

    let to_final = new Date(Number(to[2]), Number(to[0]) - 1, Number(to[1]));
    return [from_final, to_final,enrollment]

}
