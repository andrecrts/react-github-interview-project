import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    InputAdornment,
    TextField
} from '@material-ui/core';

// Components
import { Table } from '../../../components/Table';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
      textTransform: 'capitalize'
    },
  }));

export const SearchBy = ({
    id,
    label,
    icon,
    handleChange,
    data,
    tableFormat,
    action,
    filterGlobal
}) => {
    const classes = useStyles();
    const columns = useMemo(() => tableFormat(), [tableFormat]);

    return (
        <div>
            <TextField
                onChange={handleChange}
                className={classes.margin}
                id={id}
                label={label}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    ),
                }}
            />
            <Table
                columns={columns}
                data={data}
                handleAction={action}
                filterGlobal={filterGlobal ? filterGlobal : null}
            />
        </div>
    );
};
