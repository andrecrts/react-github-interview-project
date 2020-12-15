import React from 'react';
import { connect } from 'react-redux';

const RepositoriesCounter = ({total}) => (
	<div className="repository-count">{total}</div>
);

const mapStateToProps = (state, { source = "repositories" }) => ({
	total: state[source].length
});

export default connect(mapStateToProps, null)(RepositoriesCounter);