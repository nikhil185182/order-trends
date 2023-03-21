import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAppSelector } from "../../shared/utils/redux/selectors/hooks";
import '../../shared/css/inactive.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { getInactiveUsersData } from "../../shared/dto/InactiveUsersDTO";
import TablePagination from "@mui/material/TablePagination";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function InactiveTable() {
  var Ddata = useAppSelector((state) => state.InactiveUsers.inactiveUsers);
  const [rows, setRows] = useState<getInactiveUsersData[]>(Ddata);
  const [searched, setSearched] = useState<string>("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortingOrder, setSortingOrder] = useState('asc');
  const inputDate = useAppSelector(state => state.InactiveUsers.Date);
  useEffect(() => {
    setRows(Ddata);
  }, [Ddata]);



  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [searchTerm, setSearchTerm] = useState('');


  const requestSearch = (searchedVal: string) => {
    const filteredRows = Ddata.filter((row) => {
      return row.CompanyName.toLowerCase().includes(searchedVal.toLowerCase())
        || row.CompanyName.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    setSearchTerm("");
    requestSearch(searched);
  };



  return (
    <>
      <Paper className="Inactive_Table">
        <TableContainer className="rows">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="Heading" colSpan={3} align="center" style={{ backgroundColor: '#f5f5f5' }}>
                  <h2>Inactive Companies List</h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} align="left" >
                  <TextField
                    label="Search Companies"
                    variant="outlined"
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value)
                      requestSearch(event.target.value)
                    }
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    className="search-bar"
                  />
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell >Company Name</TableCell>
                <TableCell align="right">
                  Latest Order Date
                  <IconButton onClick={() => setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc')}>
                    {sortingOrder === 'asc' ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="inner-rows">
              {rows.filter((row) =>
                row.CompanyName.toLowerCase().includes(searchTerm.toLowerCase())
              )
                .sort((a, b) => {
                  if (sortingOrder === 'asc') {
                    return new Date(a.LatestOrderDate).getTime() - new Date(b.LatestOrderDate).getTime();
                  } else {
                    return new Date(b.LatestOrderDate).getTime() - new Date(a.LatestOrderDate).getTime();
                  }
                })
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow >
                    <TableCell component="th" scope="row">
                      {row.CompanyName}
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