import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';
import cliSpinners from 'cli-spinners';

const supportedTypes = Object.keys(cliSpinners);

class Spinner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {frame: 0};
		this.updateFrame = this.updateFrame.bind(this);
	}

	componentDidMount() {
		const {type} = this.props;
		this.timer = setInterval(this.updateFrame, cliSpinners[type].interval);
	}

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	updateFrame() {
		const {type} = this.props;
		const {frames} = cliSpinners[type];

		this.setState(prevState => {
			const nextFrame = (prevState.frame < frames.length - 1) ? prevState.frame + 1 : 0;
			return {frame: nextFrame};
		});
	}

	render() {
		const {type} = this.props;
		const {frame} = this.state;

		return <Text>{cliSpinners[type].frames[frame]}</Text>;
	}
}

Spinner.propTypes = {
	type: PropTypes.oneOf(supportedTypes)
};

Spinner.defaultProps = {
	type: supportedTypes[0]
};

export default Spinner;
