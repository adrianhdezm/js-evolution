
import * as d3 from 'd3';


import react from './data/rectjs';
import polymer from './data/polymerjs';
import vuejs from './data/vuejs';

// set the dimensions and margins of the graph
let margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 1024 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;


// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
let svg = d3.select('body').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

let g = svg.append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);


//signals

let startYear = '2013';
let endYear = '2018';
let versionRectWidth = 60;
let axeVerticalPosition = height-20;


//scales
// parse the date / time
let parseTime = d3.isoParse;


let timeScale  = d3.scaleTime()
    .domain([new Date(startYear, 0, 1), new Date(endYear, 3, 1)])
    .range([0, width]);

let colorScale =  d3.scaleOrdinal(d3.schemeCategory10);


// Adding order of the releases

let reactData = react.map(release => {
    release['position'] = 1;
    return release;
});


let polymerData = polymer.map(release => {
    release['position'] = 2;
    return release;
});


let vuejsData = vuejs.map(release => {
    release['position'] = 3;
    return release;
});


//Removing minor releases in Polymer
polymerData = polymerData.filter(release => {
    return  release.version.slice(0,6) !== 'v0.0.2';
});



let data = reactData
            .concat(polymerData)
            .concat(vuejsData);


 //removing minor releases
data = data.filter(release => {
 return release.version.slice(-2) === '.0' ;
});


//adding offset
data = data.map( (release,index) => {

    let offset = - 60*Math.pow(release['position'], 1.5);

    if(index%2 === 0){
        offset = offset - 30;
    }

    //- Math.floor((Math.random() * 30) + 10)

    release['offset'] = offset ;
    return release;
});

//removing the adding the version in the text
data = data.map(release => {
    if (release.version.charAt(0) !== 'v') release.version = 'v' + release.version;
    return release;
});

//sorting by time
data.sort((a, b) => parseTime(a.date) - parseTime(b.date));


//adding years

let years = [...Array(endYear-startYear+1).keys()];

years = years.map((year) => {
    return {
        str : Number(startYear)+year,
        date : new Date(Number(startYear)+year, 0, 1)
    };
});


//adding marks

let axe = g.append('line')
    .attr('x1', 0)
    .attr('y1', axeVerticalPosition)
    .attr('x2', width)
    .attr('y2', axeVerticalPosition)
    .attr('stroke-width', 2)
    .attr('stroke', 'black');


let timeLegend = g.selectAll('g.time-legend')
    .data(years)
    .enter().append('g');

timeLegend
    .attr('class', 'time-legend')
    .attr('transform', d => `translate(${timeScale(d.date)},${axeVerticalPosition})`);


let timeLegendText = timeLegend.append('text');
timeLegendText
    .attr('x',4)
    .attr('y',18)
    .text( d => d.str)
    .attr('font-family', 'sans-serif')
    .attr('font-size', '14px')
    .attr('fill', 'black');

let timeLegendLine = timeLegend.append('line');
timeLegendLine
    .attr('x1', 1)
    .attr('y1', 0)
    .attr('x2', 1)
    .attr('y2', height-axeVerticalPosition)
    .attr('stroke-width', 2)
    .attr('stroke', 'black');


let versions = g.selectAll('g.version')
    .data(data)
    .enter().append('g');


versions
    .attr('class', 'vesion')
    .attr('transform', d => `translate(${ timeScale(parseTime(d.date))},${axeVerticalPosition})`)
    .on("click", d => {
        window.open(d.url);
        d3.event.stopPropagation();
    });



let points = versions.append('circle');
points
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 5)
    .attr('fill',  d => colorScale(d.position));




let rects = versions.append('rect');
rects
    .attr('x', -versionRectWidth/2)
    .attr('y', d => d.offset)
    .attr('width', versionRectWidth)
    .attr('height', 20)
    .attr('fill',  d => colorScale(d.position))
    .attr('fill-opacity',  0.5)
    .attr('stroke', d => colorScale(d.position))
    .attr('stroke-width', 2);

let texts = versions.append('text');
texts
    .attr('x',0)
    .attr('y',d => d.offset + 15)
    .text( d => d.version)
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
    .attr('stroke-opacity',  0.2)
    .attr('stroke-width', 2);
