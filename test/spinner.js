import test from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import delay from 'delay';
import cliSpinner from 'cli-spinners';
import {Spinner} from '..';

test('spinner', async t => {
	const {dots} = cliSpinner;
	const {frames, unmount} = render(<Spinner/>);

	await delay(dots.frames.length * dots.interval);
	unmount();

	const uniqueFrames = [...new Set(frames.filter(frame => frame !== '\n'))];

	t.deepEqual(uniqueFrames, dots.frames);
});
