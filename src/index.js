'use strict';

import * as d3 from 'd3';
import './style.css';

import milestones from './milestones';
import timeline from './timeline';

const svg = d3.select('svg');
const width = parseFloat(svg.attr('width'));
const height = parseFloat(svg.attr('height'));


const timelineBtn = document.getElementById('timeline');
const milestoneBtn = document.getElementById('milestones');

timelineBtn.addEventListener('click', () => {
	svg.selectAll('*').remove();
	timeline(svg,width,height);
});


milestoneBtn.addEventListener('click', () => {
	svg.selectAll('*').remove();
	milestones(svg,width,height);
});