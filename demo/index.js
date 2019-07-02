import React from 'react';
import {render, Box} from 'ink';
import cliSpinners from 'cli-spinners/spinners';
import {Symbol, Spinner} from '..';

render(
	<Box>
		<Box>
			{['info', 'success', 'warning', 'error'].map(type => <Symbol key={type} type={type}/>)}
		</Box>
		<Box>
			{Object.keys(cliSpinners).map(type => {
				return <Spinner key={type} type={type}/>;
			})}
		</Box>
	</Box>
);

