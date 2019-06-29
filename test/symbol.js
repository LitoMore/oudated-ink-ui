import test from 'ava';
import React from 'react';
import {render} from 'ink-testing-library';
import logSymbols from 'log-symbols';
import {Symbol} from '..';

test('info', t => {
	const {lastFrame} = render(<Symbol type="info"/>);
	t.is(lastFrame(), logSymbols.info);
});

test('success', t => {
	const {lastFrame} = render(<Symbol type="success"/>);
	t.is(lastFrame(), logSymbols.success);
});

test('warning', t => {
	const {lastFrame} = render(<Symbol type="warning"/>);
	t.is(lastFrame(), logSymbols.warning);
});

test('error', t => {
	const {lastFrame} = render(<Symbol type="error"/>);
	t.is(lastFrame(), logSymbols.error);
});
