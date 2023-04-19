import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TablePagination from "@mui/material/TablePagination";
import { Button, IconButton } from "@mui/material";
import { Downloading } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import * as XLSX from 'xlsx';
import { getInactiveUsersData } from "../../containers/InactiveCompanies/models";
import { tableSelector } from "../../containers/InactiveCompanies/selector";
import {  Inactivetable, Rows, Searchbar } from "../../containers/InactiveCompanies/styledComponents";
import { useAppSelector } from "../../shared/utils/redux/hooks";


export default function InactiveTable() {
  var Ddata = useAppSelector(tableSelector);
  const [rows, setRows] = useState<getInactiveUsersData[]>(Ddata);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortingOrder, setSortingOrder] = useState('asc');
  useEffect(() => {
    setRows(Ddata);
  }, [Ddata]);
  console.log(Ddata);


  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const date = new Date().toISOString().slice(0, 10);
    const filename = `Inactive Companies ${date}.xlsx`;
    XLSX.writeFile(workbook, filename);
  };


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

  return (
    <>
      <Inactivetable>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Rows>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="Heading" colSpan={3} align="center" style={{ backgroundColor: '#f5f5f5' }}>
                    <h2>Inactive Companies List</h2>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">
                    <Button onClick={exportToExcel}>
                      Export to Excel
                      <Downloading />
                    </Button>
                  </TableCell>
                  <TableCell colSpan={2} align="right" >
                    <Searchbar>
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
                      />
                    </Searchbar>
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
              <TableBody>
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
                  .map((row,index) => (
                    <TableRow key={index} >
                      <TableCell component="th" scope="row" align="left">
                        {row.CompanyName}
                      </TableCell>
                      <TableCell component="th" scope="row" align="right">
                        {row.LatestOrderDate.toString().slice(0, 10)}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Rows>
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
      </Inactivetable>
    </>
  )
}
