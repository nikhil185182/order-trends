import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "../../shared/utils/redux/hooks";
import { DateTypeCast } from "../CompaniesEnrolled/utils";
import { StyledTableBody, StyledTableContainer, StyledTitle } from "./StyledComponents";

export default function InformationDisplay() {
  const fromDate = useAppSelector((state) => state.EnrolledCompanies.fromDate);
  const toDate = useAppSelector((state) => state.EnrolledCompanies.toDate);
  let fromFinal = DateTypeCast(fromDate);
  let toFinal = DateTypeCast(toDate);
  const CompanyInfo = useAppSelector((state) => state.EnrolledCompanies.newUsersdata);
  let Enrollments: number = 0;
  CompanyInfo.map((obj) => {
    Enrollments = Enrollments + obj.frequency;
  });
  const diffTime: number = Math.abs(toFinal.getTime() - fromFinal.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <StyledTableBody>
      <StyledTitle>
        Company Enrollments
      </StyledTitle>

      <StyledTableContainer>
        <Table aria-label="customized table">
          <TableBody>
            <TableRow>
              <TableCell>From Date</TableCell>
              <TableCell align="left">{fromFinal.toDateString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>To Date</TableCell>
              <TableCell align="left">{toFinal.toDateString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>No. Of Days</TableCell>
              <TableCell align="left">{diffDays}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Enrollments</TableCell>
              <TableCell align="left">{Enrollments
              }</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </StyledTableContainer>
    </StyledTableBody>
  );
}
