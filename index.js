//barchart
const dataset = [1, 6, 2, 3, 8, 11, 4, 5]
const w = 500
const h = 300

const svg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('width', 25)
  .attr('height', d => d * 20)
  .attr('x', (d, i) => i * 30)
  .attr('y', d => h - d * 20)
  .attr('fill', 'darkorange')
  .attr('class', 'bar')
  .append('title')
  .text(d=>d)

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (d, i) => i * 30)
  .attr('y', d => h - d * 20 - 3)
  .text(d => d)
  .attr('font-family', 'Helvetica')
  .attr('fill', 'olive')

  //scatterplot
const dataset2 = [
    [ 34,    78 ],
    [ 109,   280 ],
    [ 310,   120 ],
    [ 79,    411 ],
    [ 420,   220 ],
    [ 233,   145 ],
    [ 333,   96 ],
    [ 222,   333 ],
    [ 78,    320 ],
    [ 21,    123 ]
  ];

const svg2 = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

  svg2.selectAll('circle')
  .data(dataset2)
  .enter()
  .append('circle')
  .attr('cx', d=>d[0])
  .attr('cy', d=>h-d[1])
  .attr('r', 5)
  