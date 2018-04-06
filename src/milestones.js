'use strict';
import * as d3 from 'd3';

import dataFromGitHub from './data';


const milestones = async (container, width, height) => {
	const g = container.append('g').attr('transform', `translate(${0},${0})`);

	//signals

	const startYear = '2013';
	const endYear = '2019';
	const versionRectWidth = 60;
	const axeVerticalPosition = height - 20;

	//scales
	// parse the date / time
	let parseTime = d3.isoParse;

	let timeScale = d3
		.scaleTime()
		.domain([new Date(startYear - 1, 10, 1), new Date(endYear, 3, 1)])
		.range([0, width]);

	let colorScale = d3.scaleOrdinal(d3.schemeCategory10);


	const raw = await dataFromGitHub();

	console.log(raw);      

	// Adding order of the releases

	const vuejsData = raw[0]
		.map(item => ({ ...item, position: 6 }))
		.filter(release => /^(v\d+|\d+).\d+\.\d+$/.test(release.version));
	const reactData = raw[1].map(item => ({ ...item, position: 5 }));
	const polymerData = raw[2]
		.map(item => ({ ...item, position: 4 }))
		.filter(release => release.version.slice(0, 6) !== 'v0.0.2');
	const d3Data = raw[3].map(item => ({ ...item, position: 3 }));
	const angularData = raw[4]
		.map(item => ({ ...item, position: 2 }))
		.filter(release => /^(v\d+|\d+).\d+\.\d+$/.test(release.version));
	const jqueryData = raw[5]
		.map(item => ({ ...item, position: 1 }))
		.filter(release => /^\d+\.\d+\.\d+$/.test(release.version));

	let data = reactData
		.concat(polymerData)
		.concat(vuejsData)
		.concat(angularData)
		.concat(jqueryData)
		.concat(d3Data);

	//removing minor releases
	data = data.filter(release => {
		return release.version.slice(-2) === '.0';
	});

	//adding offset
	data = data.map((release, index) => {
		let offset = -60 * Math.pow(release.position, 1.3);

		if (index % 2 === 0) {
			offset = offset - 30;
		}

		//- Math.floor((Math.random() * 30) + 10)

		release.offset = offset;
		return release;
	});

	//removing the adding the version in the text
	data = data.map(release => {
		if (release.version.charAt(0) !== 'v')
			release.version = 'v' + release.version;
		return release;
	});

	//sorting by time
	data.sort((a, b) => parseTime(a.date) - parseTime(b.date));

	//adding years

	let years = [...Array(endYear - startYear + 1).keys()];

	years = years.map(year => {
		return {
			str: Number(startYear) + year,
			date: new Date(Number(startYear) + year, 0, 1)
		};
	});

	//adding marks

	g
		.append('line')
		.attr('x1', 0)
		.attr('y1', axeVerticalPosition)
		.attr('x2', width)
		.attr('y2', axeVerticalPosition)
		.attr('stroke-width', 2)
		.attr('stroke', 'black');

	let timeLegend = g
		.selectAll('g.time-legend')
		.data(years)
		.enter()
		.append('g');

	timeLegend
		.attr('class', 'time-legend')
		.attr(
			'transform',
			d => `translate(${timeScale(d.date)},${axeVerticalPosition})`
		);

	let timeLegendText = timeLegend.append('text');
	timeLegendText
		.attr('x', 4)
		.attr('y', 18)
		.text(d => d.str)
		.attr('font-family', 'sans-serif')
		.attr('font-size', '14px')
		.attr('fill', 'black');

	let timeLegendLine = timeLegend.append('line');
	timeLegendLine
		.attr('x1', 1)
		.attr('y1', 0)
		.attr('x2', 1)
		.attr('y2', height - axeVerticalPosition)
		.attr('stroke-width', 2)
		.attr('stroke', 'black');

	let versions = g
		.selectAll('g.version')
		.data(data)
		.enter()
		.append('g');

	versions
		.attr('class', 'vesion')
		.attr(
			'transform',
			d => `translate(${timeScale(parseTime(d.date))},${axeVerticalPosition})`
		)
		.on('click', d => {
			window.open(d.url);
			d3.event.stopPropagation();
		});

	let points = versions.append('circle');
	points
		.attr('cx', 0)
		.attr('cy', 0)
		.attr('r', 5)
		.attr('fill', d => colorScale(d.position));

	let rects = versions.append('rect');
	rects
		.attr('x', -versionRectWidth / 2)
		.attr('y', d => d.offset)
		.attr('width', versionRectWidth)
		.attr('height', 20)
		.attr('fill', d => colorScale(d.position))
		.attr('fill-opacity', 0.5)
		.attr('stroke', d => colorScale(d.position))
		.attr('stroke-width', 2);

	let texts = versions.append('text');
	texts
		.attr('x', 0)
		.attr('y', d => d.offset + 15)
		.text(d => d.version)
		.attr('font-family', 'sans-serif')
		.attr('text-anchor', 'middle')
		.attr('font-size', '14px')
		.attr('fill', 'black');

	let lines = versions.append('line');
	lines
		.attr('x1', 0)
		.attr('y1', 0)
		.attr('x2', 0)
		.attr('y2', d => d.offset)
		.attr('stroke-width', 1)
		.attr('stroke', d => colorScale(d.position))
		.attr('stroke-opacity', 0.2)
		.attr('stroke-width', 2);
};

export default milestones;
