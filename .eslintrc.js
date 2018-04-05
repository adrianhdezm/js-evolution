'use strict';

const packageJson = require('./package.json');
const dependencies =
	'dependencies' in packageJson ? Object.keys(packageJson.dependencies) : [];

const eslintPlugins = [];
const eslintExtends = ['eslint:recommended'];
const eslintEcmaFeatures = {
	experimentalObjectRestSpread: true
};

if (dependencies.includes('react')) {
	eslintPlugins.push('react');
	eslintExtends.push('plugin:react/recommended');
	eslintEcmaFeatures.jsx = true;
}

module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: eslintExtends,
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: eslintEcmaFeatures,
		sourceType: 'module'
	},
	plugins: eslintPlugins,
	rules: {
		'no-console': 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	}
};
