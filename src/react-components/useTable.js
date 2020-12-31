import React, {useState} from 'react';
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TablePagination
} from "@material-ui/core";

const useTable = (rows, headCells) => {
    const pages = [5, 10, 15];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const TblContainer = props => (
        <Table>{props.children}</Table>
    );

    const TblHead = () => (
        <TableHead>
            <TableRow>
                {
                    headCells.map(({ id, label }) => (
                        <TableCell key={id}>{label}</TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );

    const TblPagination = () => (
        <TablePagination
            component="div"
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={rows.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    );

    const rowsAfterPaging = () => {
        return rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    };

    return {
        TblContainer,
        TblHead,
        TblPagination,
        rowsAfterPaging
    };
}

export default useTable;