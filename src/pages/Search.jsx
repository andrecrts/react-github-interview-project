import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PeopleIcon from '@material-ui/icons/People';
import CodeIcon from '@material-ui/icons/Code';
import {
    Paper,
    Tabs,
    Tab,
    Box,
    Typography
} from '@material-ui/core';

// Components
import { SearchByUserName } from './components/SearchByUserName';
import { SearchByRepositoryName } from './components/SearchByRepositoryName';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
};
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export const Search = () => {
    const [value, setValue] = useState(0);
    
    const handleChange = (e, newValue) => setValue(newValue);
    return (
        <Paper>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="By username" icon={<PeopleIcon />} />
                <Tab label="By repository" icon={<CodeIcon />} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <SearchByUserName />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SearchByRepositoryName />
            </TabPanel>
        </Paper>
    );
};