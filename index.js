
const dataset = [1, 6, 2, 3, 8, 11, 4, 5]
const w = 500
const h = 200

const svg = d3.select('body')
  .append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append('rect')
  .attr('width', 25)
  .attr('height', d => {
    return d * 20
  })
  .attr('x', (d, i) => {
    return i * 30
  })
  .attr('y', d => {
    return h - d * 20
  })
  .attr('fill', 'teal')