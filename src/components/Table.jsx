// Dependencies
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useTable, useSortBy, useGlobalFilter, usePagination, useFilters
} from 'react-table';

// Material-UI
import {
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableSortLabel,
  TablePagination
} from '@material-ui/core';
import MaUTable from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

// Components
import { Pagination } from './Pagination';

export const Table = ({
  columns,
  data,
  initialState,
  filterGlobal,
  handleAction,
  skipPageReset
}) => {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
    setGlobalFilter,
    rows
  } = useTable({
    columns,
    data,
    initialState,
    autoResetPage: !skipPageReset,
    autoResetFilters: !skipPageReset,
    // Custom functions we can call from any of our cell renderers
    handleAction
  },
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination
  );

  useEffect(() => {
    setGlobalFilter(filterGlobal);
  }, [setGlobalFilter, filterGlobal]);

  const handleChangePage = (event, newPage) => gotoPage(newPage);

  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value));
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <>
      <TableContainer style={{ maxHeight: '50vh' }}>
        <MaUTable {...getTableProps} stickyHeader>
          <TableHead>
            {headerGroups.map(headerGroup => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <TableCell
                    {...(column.id === 'selection'
                      ? column.getHeaderProps()
                      : column.getHeaderProps(column.getSortByToggleProps()))}
                  >
                    {column.render('Header')}
                    {column.id !== 'selection' ? (
                      <TableSortLabel
                        active={column.isSorted}
                        direction={column.isSortedDesc ? 'desc' : 'asc'}
                      />
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {page.map((row, i) => {
              prepareRow(row);
              const { key } = row.getRowProps();
              return (
                <React.Fragment key={key}>
                  <TableRow {...row.getRowProps()}>
                    {row.cells.map(cell => (
                      <TableCell {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </MaUTable>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[
          5,
          10,
          25,
          { label: 'All', value: data.length }
        ]}
        count={rows.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        SelectProps={{
          inputProps: { 'aria-label': 'rows per page' },
          native: true
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        ActionsComponent={Pagination}
      />
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any),
  data: PropTypes.arrayOf(PropTypes.any),
  initialState: PropTypes.objectOf(PropTypes.any),
  filterGlobal: PropTypes.string,
  handleAction: PropTypes.func,
  skipPageReset: PropTypes.bool
};
