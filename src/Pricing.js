import { Heading } from '@chakra-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import { useStyles } from './styles';
import { StyledTableCell, StyledTableRow } from './Table';

function createData(level, standard, advanced, additional) {
  return { level, standard, advanced, additional };
}

const rows = [
  createData('Price per word*', 'From $0.06', 'From $0.', 'Contact sales'),
  createData(
    'Quality',
    'Translator who passed our Standard level test. Best for casual content.',
    'Translator who passed our more rigorous, Advanced level test. Best for content requiring more accuracy.',
    'Proofreading by business level translator. Only available for customers with sales support.',
  ),
  createData(
    'Recommended use',
    'Internal communication Social media posts User reviews Emails and letters',
    'Presentations Reports Mobile apps Website localization',
    'Documents translated using DocMora business level.',
  ),
];

export const Pricing = () => {
  const classes = useStyles();
  return (
    <div>
      <Heading isTruncated fontSize="80px" className={classes.priceheading}>
        Pricing and Languages
      </Heading>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" className={classes.tablehead}>
                Level
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Standard
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Advanced
              </StyledTableCell>
              <StyledTableCell align="center" className={classes.tablehead}>
                Additional Services
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.level}>
                <StyledTableCell component="th" scope="row">
                  {row.level}
                </StyledTableCell>
                <StyledTableCell align="center">{row.standard}</StyledTableCell>
                <StyledTableCell align="center">{row.advanced}</StyledTableCell>
                <StyledTableCell align="center">{row.additional}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
