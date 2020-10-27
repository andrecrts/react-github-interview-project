// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI
import {
  IconButton,
  Tooltip
} from '@material-ui/core';

export const Action = ({
  title,
  icon,
  handler
}) => (
  <Tooltip key={title} title={title} placement="top" arrow>
    <span>
        <IconButton onClick={handler}>
            {icon}
        </IconButton>
    </span>
  </Tooltip>
);

Action.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.objectOf(PropTypes.any),
  handler: PropTypes.func
};
