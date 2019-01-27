
const dataset = [1, 2, 3, 4, 5]
const w = 500
const h = 200

d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)
  .append('rect')
  .attr('width', 25)
  .attr('height', 100)
  .attr('x', 0)
  .attr('y', 0)