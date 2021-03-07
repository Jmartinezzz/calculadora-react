import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => (
	<div className="result">
			{ props.value }
	</div>	
);

Result.propTypes = {
	value: PropTypes.string.isRequired
};

Result.defaultProps = {
	value: "0"
}

export default Result;