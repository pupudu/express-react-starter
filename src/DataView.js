import { useFetch } from './core/fetch';
import { useStyles } from './styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import { StyledTableCell, StyledTableRow } from './Table';

export const DataView = () => {
  const data = useFetch({ url: '/previousDoc/showFiles' });
  const classes = useStyles();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" className={classes.tablehead}>
                ID
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                File Name
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Source File Type
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Order Date
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Source Doc. Language
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Target Doc. Language/s
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Translated Date
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Revision Status
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Payment Status
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Approved Status
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.filename}</StyledTableCell>
                <StyledTableCell align="center">{row.sourcefiletype}</StyledTableCell>
                <StyledTableCell align="center">{row.orderdate}</StyledTableCell>
                <StyledTableCell align="center">{row.sourcedoclang}</StyledTableCell>
                <StyledTableCell align="center">{row.targetdoclang}</StyledTableCell>
                <StyledTableCell align="center">{row.translateddate}</StyledTableCell>
                <StyledTableCell align="center">{row.revisionstatus}</StyledTableCell>
                <StyledTableCell align="center">{row.paymentstatus}</StyledTableCell>
                <StyledTableCell align="center">{row.approvestatus}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
