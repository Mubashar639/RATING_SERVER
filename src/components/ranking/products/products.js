import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import oil from "./oil.png";
import "./products.css";
import Circle from 'react-circle';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(key, name, calories, fat, Rating ) {
  return {key, name, calories, fat, Rating };
}

const rows = [
  createData(1, "Garden Of Life Dr. Formulated CBD + Sleep", 6.0,21 , 100 ),
  createData(2, "Garden Of Life Dr. Formulated CBD + Sleep", 9.0,21 , 100),
  createData(3, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0, 21,  100),
  createData(4, "Garden Of Life Dr. Formulated CBD + Sleep", 3.7,21 , 100),
  createData(5, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0,21 , 100),
  createData(6, "Garden Of Life Dr. Formulated CBD + Sleep", 6.0,21 , 100 ),
  createData(7, "Garden Of Life Dr. Formulated CBD + Sleep", 9.0,21 , 100),
  createData(8, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0, 21,  100),
  createData(9, "Garden Of Life Dr. Formulated CBD + Sleep", 3.7,21 , 100),
  createData(10, "Garden Of Life Dr. Formulated CBD + Sleep", 16.0,21 , 100),

];

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
// }));

export default function Products() {
//   const classes = useStyles();

  return (
    <Paper  className="products">
      <Table className="products-table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell align="center">Uses</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.key} className="p-table-row" >
              <StyledTableCell component="th" scope="row">
              <img width="40" src={oil} alt=""/> {row.name}
              </StyledTableCell>
              <StyledTableCell align="center"> {row.calories}</StyledTableCell>
              <StyledTableCell align="center"><Circle progress={35}  size="70"  /></StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
