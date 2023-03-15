import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import '../../shared/css/inactive.css';
import DateandDaysSelector from "./DateandDaysSelector";
import { TablePagination } from "@mui/material";
import { getInactiveUsersData } from "../../shared/dto/InactiveUsersDTO";

export default function InactiveTable() {
  var Ddata = useAppSelector((state) => state.InactiveUsers.inactiveUsers);
  const [rows, setRows] = useState<getInactiveUsersData[]>(Ddata);
  const [searched, setSearched] = useState<string>("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const inputDate = useAppSelector(state => state.InactiveUsers.Date);
  useEffect(() => {
    setRows(Ddata);
  }, [Ddata]);

  const useStyles = makeStyles({
    root: {
      width: "100%",
      padding: "20px",
    },
    table: {
      minWidth: 850,
    },
    searchBar: {
      marginBottom: "10px",
    },
  });

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
      <Paper className="Inactive_Table">
        <TableContainer className="rows">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={3} align="center">
                  <h2>Inactive Companies List</h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <SearchBar className="search_bar"
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                  />
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Company Name</TableCell>
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
                    <TableCell component="th" scope="row">
                      {row.LatestOrderDate.toString().slice(0, 10)}
                    </TableCell>
                    <TableCell component="th" scope="row" align="right">
                      {row.LatestOrderDate.toString().slice(0, 10)}
                    </TableCell>
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