import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';
import cliSpinners from 'cli-spinners';
import useInterval from '../../utils/use-interval';

const supportedTypes = Object.keys(cliSpinners);

const Spinner = props => {
	const [frame, setFrame] = useState(0);
	const spinner = cliSpinners[props.type];
	const {interval, frames} = spinner;

	useInterval(() => {
		setFrame((frame < frames.length - 1) ? frame + 1 : 0);
	}, interval);

	return <Text>{frames[frame]}</Text>;
};

Spinner.propTypes = {
	type: PropTypes.oneOf(supportedTypes)
};

Spinner.defaultProps = {
	type: supportedTypes[0]
};

export default Spinner;
