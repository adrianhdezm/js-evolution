'use strict';
import * as d3 from 'd3';

import data from './data/raw';

const timeline = (container, width, height) => {
	const g = container.append('g').attr('transform', `translate(${0},${0})`);

	//signals

	let startYear = '2006';
	let endYear = '2018';
	let axeVerticalPosition = height - 20;

	//scales
	// parse the date / time
	let parseTime = d3.isoParse;

	let timeScale = d3
		.scaleTime()
		.domain([new Date(startYear - 1, 10, 1), new Date(endYear, 7, 1)])
		.range([0, width]);

	let colorScale = d3.scaleOrdinal(d3.schemeCategory10);

	data.asyncItems().then(raw => {
		// Mapping RawData to Projects

		let data = raw.map(project => {
			project.sort((a, b) => parseTime(a.date) - parseTime(b.date));
			return {
				project: project[0].project,
				minRelease: {
					name: project[0].version,
					date: project[0].date,
					url: project[0].url
				},
				maxRelease: {
					name: project[project.length - 1].version,
					date: project[project.length - 1].date,
					url: project[project.length - 1].url
				}
			};
		});

		//sorting projects based on MinReleaseDate
		data.sort(
			(a, b) => parseTime(a.minRelease.date) - parseTime(b.minRelease.date)
		);

		//adding project offset position

		data = data.map((project, index) => {
			project['offset'] = -60 * Math.pow(index + 1, 1.3);
			return project;
		});

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

		let projects = g
			.selectAll('g.version')
			.data(data)
			.enter()
			.append('g');

		projects
			.attr('class', 'project')
			.attr(
				'transform',
				d =>
					`translate(${timeScale(
						parseTime(d.minRelease.date)
					)},${axeVerticalPosition + d.offset})`
			);

		let projectRect = projects.append('rect');
		projectRect
			.attr('x', 0)
			.attr('y', 0)
			.attr(
				'width',
				d =>
					timeScale(parseTime(d.maxRelease.date)) -
					timeScale(parseTime(d.minRelease.date))
			)
			.attr('height', 20)
			.attr('fill', d => colorScale(d.project))
			.attr('fill-opacity', 0.5)
			.attr('stroke', d => colorScale(d.project))
			.attr('stroke-width', 2);

		let projectPoint = projects.append('circle');
		projectPoint
			.attr('cx', 0)
			.attr('cy', d => -d.offset)
			.attr('r', 5)
			.attr('fill', d => colorScale(d.project));

		let projectLine = projects.append('line');
		projectLine
			.attr('x1', 0)
			.attr('y1', 0)
			.attr('x2', 0)
			.attr('y2', d => -d.offset)
			.attr('stroke-width', 1)
			.attr('stroke', d => colorScale(d.project))
			.attr('stroke-opacity', 0.2)
			.attr('stroke-width', 2);

		let ProjectMinVersionText = projects.append('text');
		ProjectMinVersionText.attr('x', 0)
			.attr('y', 15)
			.text(d => d.minRelease.name)
			.attr('font-family', 'sans-serif')
			.attr('text-anchor', 'start')
			.attr('font-size', '14px')
			.attr('fill', 'black');

		let ProjectMaxVersionText = projects.append('text');
		ProjectMaxVersionText.attr(
			'x',
			d =>
				timeScale(parseTime(d.maxRelease.date)) -
				timeScale(parseTime(d.minRelease.date))
		)
			.attr('y', 15)
			.text(d => d.maxRelease.name)
			.attr('font-family', 'sans-serif')
			.attr('text-anchor', 'end')
			.attr('font-size', '14px')
			.attr('fill', 'black');
	});
};

export default timeline;
