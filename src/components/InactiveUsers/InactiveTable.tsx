import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { useAppSelector } from "../../shared/utils/redux/Selectors/hooks";
import '../../shared/css/inactive.css';
import DateandDaysSelector from "./DateandDaysSelector";
import { TablePagination } from "@mui/material";
import { getInactiveUsersData } from "../../shared/dto/orderTrendDto";

interface food {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}



const originalRows: food[] = [
  { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 }
];



export default function BasicTable() {
  const Ddata = useAppSelector((state) => state.InactiveUsers.inactiveUsers);
  console.log(Ddata);
  const [rows, setRows] = useState<getInactiveUsersData[]>(Ddata);
  const [searched, setSearched] = useState<string>("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const inputDays = useAppSelector(state => state.InactiveUsers.Days);
  
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchedVal: string) => {
    const filteredRows = Ddata.filter((row) => {
      return row.CompanyName.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
    <div className='Datepicker_component'>
            <DateandDaysSelector />
    </div>
      <Paper className="table">
        <SearchBar className="search_bar"
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer className="rows">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="left">Latest Order Date</TableCell>
                <TableCell align="center">Impact</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="inner-rows">
              {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow >
                  <TableCell component="th" scope="row">
                    {row.CompanyName}
                  </TableCell>
                  {/* <TableCell align="left">{row.calories}</TableCell> */}
                  {/* <TableCell align="center">{row.Impact}</TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>
    </>
  )
}