import { useFetch } from '../core/fetch';
import { useStyles } from './styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

export const CustomTable = () => {
  const data = useFetch({ url: '/api/orderDetails/showFiles' });
  const languages = ['sinhala', 'english', 'tamil'];
  const classes = useStyles();
  function createData(
    id,
    orderDate,
    orderStatus,
    sourceLanguage,
    fileType,
    pageCount,
    sinhalaTranslation,
    englishTranslation,
    tamilTranslation,
    sinhalaTranslator,
    englishTranslator,
    tamilTranslator,
    price,
  ) {
    return {
      id,
      orderDate,
      orderStatus,
      sourceLanguage,
      fileType,
      pageCount,
      sinhalaTranslation,
      englishTranslation,
      tamilTranslation,
      sinhalaTranslator,
      englishTranslator,
      tamilTranslator,
      other: languages
        .map((language) => {
          if (language === 'english' && englishTranslation === 'true') {
            return { translateTo: 'English', translator: englishTranslator, price: price };
          } else if (language === 'sinhala' && sinhalaTranslation === 'true') {
            return { translateTo: 'Sinhala', translator: sinhalaTranslator, price: price };
          } else if (language === 'tamil' && tamilTranslation === 'true') {
            return { translateTo: 'Tamil', translator: tamilTranslator, price: price };
          }
        })
        .filter((item) => {
          return item !== undefined;
        }),
    };
  }

  const rows = data.map((order) => {
    return createData(
      order.id,
      order.orderDate,
      order.orderStatus,
      order.sourceLanguage,
      order.fileType,
      order.pageCount,
      order.sinhalaTranslation,
      order.englishTranslation,
      order.tamilTranslation,
      order.sinhalaTranslator,
      order.englishTranslator,
      order.tamilTranslator,
      order.price,
    );
  });
  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            <Button color="primary" href="#">
              {row.id}
            </Button>
          </TableCell>
          <TableCell align="right">{row.orderDate}</TableCell>
          <TableCell align="right">{row.orderStatus}</TableCell>
          <TableCell align="right">{row.sourceLanguage}</TableCell>
          <TableCell align="right">{row.fileType}</TableCell>
          <TableCell align="right">{row.pageCount}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Other Details
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Translate To</TableCell>
                      <TableCell>Translator</TableCell>
                      <TableCell align="right">Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.other.map((otherRow) => (
                      <TableRow>
                        <TableCell component="th" scope="row">
                          {otherRow.translateTo}
                        </TableCell>
                        <TableCell>{otherRow.translator}</TableCell>
                        <TableCell align="right">{otherRow.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Order Number</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Order Status</TableCell>
              <TableCell align="right">Source Language</TableCell>
              <TableCell align="right">File Type</TableCell>
              <TableCell align="right">Page Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
