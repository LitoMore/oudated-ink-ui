import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';
import terminalLink from 'terminal-link';

const Link = props => {
	return (
		<Text unstable__transformChildren={children => terminalLink(children, props.url, props.options)}>
			{props.children}
		</Text>
	);
};

Link.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	url: PropTypes.string,
	options: PropTypes.object
};

Link.defaultProps = {
	url: '',
	options: {}
};

export default Link;
