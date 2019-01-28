
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

svg.selectAll('text')
  .data(dataset)
  .enter()
  .append('text')
  .attr('x', (d, i) => i * 30)
  .attr('y', d => h - d * 20 - 3)
  .text(d => d)
  .attr('font-family', 'Helvetica')
  .attr('fill', 'olive')