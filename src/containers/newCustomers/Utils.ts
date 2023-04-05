import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";

export const ConvertedfromandToDates = () => {
    const fromdate = useAppSelector((state) => state.NewUser.fromDate);
    const todate = useAppSelector((state) => state.NewUser.toDate);
    let from = fromdate.split("/");

    let from_final = new Date(
        Number(from[2]),
        Number(from[0]) - 1,
        Number(from[1])
    );
    let to = todate.split("/");

    let to_final = new Date(Number(to[2]), Number(to[0]) - 1, Number(to[1]));
    return [from_final, to_final]

}
