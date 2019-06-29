import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';
import logSymbols from 'log-symbols';

const Symbol = props => {
	return <Text>{logSymbols[props.type]}</Text>;
};

Symbol.propTypes = {
	type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired
};

export default Symbol;
