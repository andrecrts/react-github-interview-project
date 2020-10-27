import React from "react";
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    icon: {
      paddingRight: 15,
      fontSize: '48px'
    },
    title: {
      flexGrow: 1,
      color: 'white'
    },
  }));

export const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <GitHubIcon className={classes.icon}/>
                <Typography variant="h6" className={classes.title}>
                    <ul>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/bookmarks">Bookmarks</Link>
                        </li>
                    </ul>
                </Typography>
            </Toolbar>
            </AppBar>
        </div>
    )
};
